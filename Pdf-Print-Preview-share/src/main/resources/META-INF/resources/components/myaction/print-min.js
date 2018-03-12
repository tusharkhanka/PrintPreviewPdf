 YAHOO.Bubbling.fire("registerAction", {
    actionName : "pdfDocumentPrint",
    fn : function pdfDocumentPrint(record, siteId) {
    	var jsNode = record.jsNode,
            nodeRef = jsNode.isLink ? jsNode.linkedNode.nodeRef : jsNode.nodeRef,
            nodeRef = jsNode.isLink && !$isValueSet(nodeRef) ? "invalidlink" : nodeRef,
            strNodeRef = nodeRef.toString(),
            nodeRefUri = nodeRef.uri,
            contentUrl = jsNode.contentURL,
            mimetype = new String(jsNode.mimetype);
			//console.log(mimetype);
			fn : function printPdf() {
					var WindowObject = window.open(Alfresco.constants.PROXY_URI+ "/api/node/" + nodeRefUri + "/content/thumbnails/pdf?c=force");
				    WindowObject.onload = function () {
				        WindowObject.focus();
				        WindowObject.print();
				        };
					}
			if ( mimetype == 'application/pdf' ){ 
				return window.open(Alfresco.constants.PROXY_URI+ contentUrl + "\" target=\"_blank");
			}
			else {
				printPdf();
				}
      	}  
      });
		