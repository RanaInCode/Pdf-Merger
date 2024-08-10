const mergePdfs = async (pdf1,pdf2) => {
  const PDFMerger = (await import('pdf-merger-js')).default;
  const merger = new PDFMerger();

  await merger.add(pdf1);
  await merger.add(pdf2);

  let d = new Date().getTime();

  await merger.setMetadata({
    producer: "pdf-merger-js based script",
    author: "John Doe",
    creator: "John Doe",
    title: "My life as John Doe"
  });

  await merger.save(`public/${d}merged.pdf`);
  return d;
}

module.exports = {mergePdfs};

