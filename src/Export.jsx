// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { Document } from './Document';

export function Export(props) {

  const printDocument = () => {
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

    return (
    <div>
      <div className="container-fluid bg-success">
        
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning m-3" onClick={printDocument}>Print</button>
        </div>
       
        
      </div>

        {/* The dimensions are the same a A4*/}
        {/* Any children will be printed to PDF */}
        
      </div>
    )
}