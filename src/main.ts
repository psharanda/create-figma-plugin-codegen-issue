export default function () {
  // Make sure that we're in Dev Mode and running codegen
  if (figma.editorType === 'dev' && figma.mode === 'codegen') {
    // Register a callback to the "generate" event
    figma.codegen.on('generate', ({ node }) => {
      return [
        {
          title: 'Section Title',
          language: 'PLAINTEXT',
          code: 'Generated code for ' + node.name + ' goes here'
        }
      ];
    });
  }
}
