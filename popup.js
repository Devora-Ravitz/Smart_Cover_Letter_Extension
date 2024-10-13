document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['highlightedText'], function (result) {
    document.getElementById('coverLetter').value = result.highlightedText || '';
  });

  document.getElementById('generateCoverLetter').addEventListener('click', async function () {
    const prompt = document.getElementById('coverLetter').value;

    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `Please generate a formal and professional cover letter based on the following job description. Focus on the content of the letter itself, dont write  thing like [Your Address], [City, State, Zip Code],dont include [Company Address], and [Recipient Name] and [Company Address]
[City, State, Zip Code] or similar. The cover letter should be engaging, natural, and feel like it was written by a human. Keep the tone formal and appropriate for a job application, but avoid including unnecessary formalities like address sections.\n\n${prompt}` 
          }],
          max_tokens: 500
        })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.choices && data.choices.length > 0) {
          document.getElementById('coverLetter').value = data.choices[0].message.content;
        } else {
          console.error('Response does not contain valid choices:', data);
          alert('Error: Invalid response from API.');
        }
      } else {
        console.error('API error:', data);
        alert(`Error: ${data.error.message}`);
      }

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate cover letter. Please try again later.');
    }
  });

  document.getElementById('copyToClipboard').addEventListener('click', function () {
    const coverLetter = document.getElementById('coverLetter').value;
    navigator.clipboard.writeText(coverLetter).then(function () {
      alert('Cover letter copied to clipboard!');
    });
  });

  // Download DOCX
  document.getElementById('downloadDocx').addEventListener('click', function () {
    if (typeof docx === 'undefined') {
      console.error('docx library not loaded');
      alert('Unable to generate DOCX. Please try again later.');
      return;
    }

    const coverLetter = document.getElementById('coverLetter').value;
    
    const doc = new docx.Document({
      sections: [{
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun({
                text: coverLetter,
                font: "Arial",
                size: 14 * 2
              })
            ]
          })
        ]
      }]
    });

    docx.Packer.toBlob(doc).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'cover_letter.docx';
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
  });

  document.getElementById('downloadPdf').addEventListener('click', function () {
    if (typeof window.jspdf === 'undefined') {
      console.error('jsPDF library not loaded');
      alert('Unable to generate PDF. Please try again later.');
      return;
    }
  
    const { jsPDF } = window.jspdf; 
    const doc = new jsPDF();
    
    const coverLetter = document.getElementById('coverLetter').value;
  
    doc.setFontSize(14); 
    doc.text(coverLetter, 10, 10); 
  
    doc.save('cover_letter.pdf'); 
  });
  });
