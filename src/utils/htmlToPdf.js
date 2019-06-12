// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install(Vue, options) {
    Vue.prototype.getPdf = function() {
      var title = this.htmlTitle
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: false,
        useCORS: true
      }).then(function(canvas) {
        var contentWidth = canvas.width
        var contentHeight = canvas.height
        var pageHeight = contentWidth / 592.28 * 841.89
        var leftHeight = contentHeight
        var position = 0
        var imgWidth = 595.28
        var imgHeight = 592.28 / contentWidth * contentHeight
        var pageData = canvas.toDataURL('image/jpeg', 1.0)
        var PDF = new JsPDF('', 'pt', 'a4')
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
        PDF.save(title + '.pdf')
      })
    }
  }
}
