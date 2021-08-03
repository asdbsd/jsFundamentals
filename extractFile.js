function extractFile(text) {
    // fullFile = text.split('\\')
    //     .pop()    
    //     .split('.')
    
    // let ext = fullFile.pop();
    // let fileName = fullFile.join('.');

    // console.log(`File name: ${fileName}`);
    // console.log(`File extension: ${ext}`);

    let lastFullstop = text.lastIndexOf('.');
    let lastLine = text.lastIndexOf('\\');

    let ext = text.substring(lastFullstop + 1);
    let fileName = text.substring(lastLine + 1, lastFullstop);

   

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${ext}`);

}


extractFile(
    'C:\\Internal\\training-internal\\Template.bak.pptx'
)
console.log('----------------')

extractFile(
    'C:\\Projects\\Data-Structures\\LinkedList.cs'
)