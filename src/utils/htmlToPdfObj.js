// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install(Vue, options) {
    Vue.prototype.getPdfs = function(options, name) {
      var titleName = name // this.htmlTitle
      var c = document.createElement('canvas')
      var opts = {
        scale: 3,
        canvas: c,
        logging: true,
        width: document.querySelector(options).width,
        height: document.querySelector(options).height,
        allowTaint: false,
        useCORS: true
      }
      c.width = document.querySelector(options).width * 3
      c.height = document.querySelector(options).height * 3
      c.getContext('2d').scale(3, 3)
      html2Canvas(document.querySelector(options), opts).then(function(canvas) {
        const contentWidth = canvas.width
        const contentHeight = canvas.height
        const pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        const imgWidth = 595.28
        const imgHeight = 592.28 / contentWidth * contentHeight
        const pageData = canvas.toDataURL('image/jpeg', 1.0)
        const PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(titleName + '.pdf')
      }
      )
    }
  }
}
// export default{
//   install(Vue, options) {
//     Vue.prototype.getPdf = function() {
//       var title = this.htmlTitle
//       html2Canvas(document.querySelector('#pdfDom'), {
//         allowTaint: false,
//         useCORS: true
//       }).then(function(canvas) {
//         var contentWidth = canvas.width
//         var contentHeight = canvas.height
//         var pageHeight = contentWidth / 592.28 * 841.89
//         var leftHeight = contentHeight
//         var position = 0
//         var imgWidth = 595.28
//         var imgHeight = 592.28 / contentWidth * contentHeight
//         var pageData = canvas.toDataURL('image/jpeg', 1.0)
//         var PDF = new JsPDF('', 'pt', 'a4')
//         if (leftHeight < pageHeight) {
//           PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
//         } else {
//           while (leftHeight > 0) {
//             PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//             leftHeight -= pageHeight
//             position -= 841.89
//             if (leftHeight > 0) {
//               PDF.addPage()
//             }
//           }
//         }
//         PDF.save(title + '.pdf')
//       })
//     }
//   }
// }
