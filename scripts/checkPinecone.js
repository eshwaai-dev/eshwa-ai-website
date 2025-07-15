import { Pinecone } from '@pinecone-database/pinecone';

// Use API keys directly
const PINECONE_API_KEY = 'REMOVED_API_KEY';
const HUGGINGFACE_API_KEY = 'REMOVED_API_KEY';

async function checkPinecone() {
  try {
    // Initialize Pinecone with API key
    const pinecone = new Pinecone({
      apiKey: PINECONE_API_KEY,
    });

    console.log('Checking Pinecone indexes...');
    
    // Get list of indexes
    const indexes = await pinecone.listIndexes();
    console.log('\nAvailable indexes:', indexes);
    
    // Check if our index exists
    const indexName = 'document-embeddings';
    const indexExists = indexes.indexes?.some((i) => i.name === indexName);
    
    if (!indexExists) {
      console.log(`\nIndex '${indexName}' does not exist`);
      return;
    }

    console.log(`\nIndex '${indexName}' exists. Checking stats...`);
    
    // Get index stats
    const index = pinecone.Index(indexName);
    const stats = await index.describeIndexStats();
    
    console.log('\nIndex Statistics:', stats);
    
    // Query for a sample of vectors
    console.log('\nQuerying sample vectors...');
    const queryResult = await index.query({
      vector: Array(384).fill(0), // Zero vector as query
      topK: 3,
      includeMetadata: true,
    });
    
    console.log('\nSample vectors:', queryResult.matches);
    
  } catch (error) {
    console.error('Error checking Pinecone:', error);
  }
}

checkPinecone().catch(console.error);
