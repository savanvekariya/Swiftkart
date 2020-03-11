var http = require("http");

http.createServer(function(req,res)
{
  res.end("Hello World");
    // merge(['One.pdf', 'Two.pdf','Three.pdf'], 'Ouput.pdf', function(err){
    //     if(err) {
    //       return console.log(err)
    //     }
    //     console.log('Successfully merged!')
    //   });
    // res.end("end");

    
    // const files = [
    //     `${__dirname}/1.pdf`,
    //     `${__dirname}/2.pdf`,
    //     {file: `${__dirname}/protected.pdf`, inputPw: '_SeCrEt_'}
    // ];
    // PDFMerge(files)
    // //Stream
    // PDFMerge(files, {output: 'Stream'})
    // //Save as new file
    // PDFMerge(files, {output: `${__dirname}/4.pdf`})
    
    
    // var merger = new PDFMerger();
 
    // (async () => {
    //   merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
    //   merger.add('2.pdf'); // merge only page 2
    //   merger.add('3.pdf',); 
    //   await merger.save('merged.pdf'); //save under given name
    // })();

}).listen(8081);
