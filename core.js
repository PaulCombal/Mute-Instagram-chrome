$(document).on("click", () =>{

	//Search for videos in page
	$("video").each(processVid);

	//Search for embedded videos
	/*$("iframe").each((i, d)=>{
		console.log(d);

		$(d).load(() => {
			var doc = this.contentDocument || this.contentWindow.document;
        	var target = $("header").first();
        	target.innerHTML = "Found It!";
		});
	});*/
	//It doesn't seem to be possible to access iframe elements due to cross-origin security measures
	//With some luck something will be done and this will be a thing
});

function processVid(index, dom) {

		//If we found an instagram video we didnt process yet
		if ($(dom).attr("poster").includes("cdninstagram.com") && ($(dom).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().find("#muteInsta").length == 0) ) {
			dom.muted = true;


			$(dom)
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.parent()
			.find("header")
			.prepend('<a id="muteInsta">Toggle Sound      -</a>')
			.find("#muteInsta")
			.on("click", () => {
				console.log("link clicked");
				dom.muted = !dom.muted;
			});
		}
}