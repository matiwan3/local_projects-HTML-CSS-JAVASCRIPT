const directoryTree = {
    name: 'Root',
    type: 'directory',
    children: [
      {
        name: 'Folder 1',
        type: 'directory',
        children: [
          {
            name: 'File 1.1',
            type: 'file',
          },
          {
            name: 'File 1.2',
            type: 'file',
          },
        ],
      },
      {
        name: 'Folder 2',
        type: 'directory',
        children: [
          {
            name: 'File 2.1',
            type: 'file',
          },
          {
            name: 'File 2.2',
            type: 'file',
          },
        ],
      },
      {
        name: 'File 3',
        type: 'file',
      },
    ],
  };

function flattenDirectoryTree(directory) {
    const flattened = [];
  
    function traverse(node, path = '') {
      for (const key in node) {
        if (key === 'name') {
          path += '/' + node[key];
        } else if (key === 'type' && node[key] === 'file') {
          flattened.push({ path, type: 'file' });
        } else if (key === 'children' && Array.isArray(node[key])) {
          for (const childNode of node[key]) {
            traverse(childNode, path);
          }
        }
      }
    }
  
    traverse(directory);
    return flattened;
  }
  
  const flattenedDirectory = flattenDirectoryTree(directoryTree);
  console.log(flattenedDirectory);
  