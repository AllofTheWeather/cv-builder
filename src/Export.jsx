// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Document } from '/src/Document.jsx';
import { useState, useEffect, useRef } from "react"


export function Export(props) {

  const [height, setHeight] = useState(0)

  function printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
  
    useEffect(() => {
      setHeight(document.getElementById('container'))
    })
  

    return (
    <div>
      <div className="container-fluid">
        
        
        <div className="d-flex justify-content-center flex-column align-items-center">
          
          <button className="btn btn-warning m-3" onClick={printDocument}>Export</button>
          <p>Click to download a PDF of your CV</p>
        </div>
        <div className="css-row">
          <div className="css-fixed-width-col">
            <Document />
          </div>
        </div>

        <div id="divToPrint" className="mt4 z" style={{
            backgroundColor: '#f5f5f5',
            width: '210mm',
            minHeight: '297mm',
            maxHeight: '297mm',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
          
        </div>
      </div>

        {/* The dimensions are the same a A4*/}
        {/* Any children will be printed to PDF */}
        
    </div>
    )
}