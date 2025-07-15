import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { processDocument, generateEmbeddings, storeInPinecone } from '../lib/documentProcessor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing documents to index
const DOCUMENTS_DIR = path.join(process.cwd(), 'public/documents');

async function readDocuments() {
  try {
    const files = await fs.readdir(DOCUMENTS_DIR);
    const documents = [];

    for (const file of files) {
      if (file.endsWith('.txt') || file.endsWith('.md')) {
        const content = await fs.readFile(path.join(DOCUMENTS_DIR, file), 'utf-8');
        documents.push({
          name: file,
          content
        });
      }
    }

    return documents;
  } catch (error) {
    console.error('Error reading documents:', error);
    return [];
  }
}

async function main() {
  console.log('Starting document processing...');
  
  // Read documents
  const documents = await readDocuments();
  if (documents.length === 0) {
    console.log('No documents found in', DOCUMENTS_DIR);
    console.log('Please add .txt or .md files to the directory and try again.');
    return;
  }

  console.log(`Found ${documents.length} documents to process`);
  
  // Process each document
  for (const doc of documents) {
    console.log(`\nProcessing document: ${doc.name}`);
    
    try {
      // Split document into chunks
      const chunks = await processDocument(doc.content);
      console.log(`- Split into ${chunks.length} chunks`);
      
      // Generate embeddings for chunks
      console.log('- Generating embeddings...');
      const embeddings = await generateEmbeddings(chunks);
      console.log(`- Generated ${embeddings.length} embeddings`);
      
      // Store in Pinecone
      console.log('- Storing in Pinecone...');
      await storeInPinecone(embeddings);
      console.log('- Successfully stored in Pinecone');
      
    } catch (error) {
      console.error(`Error processing document ${doc.name}:`, error);
    }
  }
  
  console.log('\nDocument processing complete!');
}

// Run the script
main().catch(console.error);
