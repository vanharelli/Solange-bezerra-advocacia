import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Diretórios para varrer (relativo à raiz do projeto, assumindo que scripts/ está na raiz ou um nível abaixo)
// Ajuste os caminhos conforme a estrutura: se scripts/optimize.js, então ../public e ../src
const TARGET_DIRS = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../src')
];

// Extensões para processar
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function processDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.warn(`Diretório não encontrado: ${directory}`);
    return;
  }

  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        const outputPath = fullPath.replace(ext, '.webp');
        
        console.log(`Convertendo: ${file} -> .webp`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
            
          // Deleta o arquivo original após sucesso
          fs.unlinkSync(fullPath);
          console.log(`[SUCESSO] Original removido: ${file}`);
        } catch (error) {
          console.error(`[ERRO] Falha ao converter ${file}:`, error);
        }
      }
    }
  }
}

async function main() {
  console.log('Iniciando protocolo de otimização de imagens...');
  for (const dir of TARGET_DIRS) {
    console.log(`Varrendo diretório: ${dir}`);
    await processDirectory(dir);
  }
  console.log('Otimização concluída.');
}

main();