(function(){
	var output = [];
	var complete = 0;
	output.push(`<div class="bubble-holder">`);
	for (var index in treeData){
		var node = treeData[index];
		if (node.newtier === true) {
			output.push(`</div><div class="bubble-holder">`)
		}
		var available = true;
		for (var j in node.prerequisites){
			if (localStorage.getItem(node.prerequisites[j]) != 1) {
				available = false;
			}
		}
		
		if (localStorage.getItem(node.id) == 1){
			complete++;
			output.push(`<a class="bubble available" href="${node.id}.html" style="background:linear-gradient(to bottom right, gold, goldenrod);">
							<label class="bubble-title">${node.title}</label>
						</a>`);
		}else{
			if (available === true){
				output.push(`<a class="bubble available" href="${node.id}.html" style="background-color:${node.color}">
								<label class="bubble-title">${node.title}</label>
							</a>`);
			}else{
				output.push(`<div class="bubble" style="opacity:0.2;background-color:${node.color}">
								<label class="bubble-title">${node.title}</label>
							</div>`);
			}
		}
	}
	output.push(`</div`);
	document.getElementById("tree").innerHTML = output.join("");
	document.getElementById("modules").innerHTML = complete + " / " + treeData.length + " Modules Complete"
})();