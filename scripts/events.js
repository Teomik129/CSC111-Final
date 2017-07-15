var interests;
var newEvents;

function selectEventsByInterest() {
	
	newEvents = [];
	
	var k = 0;
	for (i = 0; i < events.length; i++) {
		for (j = 0; j < interests.length; j++) {
			if (events[i].tags == interests[j]) {
				newEvents[k] = events[i];
				k++;
			}
		}
	}
}

function drawTable() {
	
	var tablebody = document.getElementById("tablebody");
	while (tablebody.hasChildNodes()) {
		tablebody.removeChild(tablebody.childNodes[0]);
	}
	
	for (var i = 0; i < newEvents.length; i++) {
		/* <tr>
			<td>John</td>
			<td>Doe</td>
			<td>john@example.com</td>
			</tr>
		*/
		
		var row = document.createElement("tr");
		
		var entry = document.createElement("td");
		entry.innerHTML = newEvents[i].title;
		row.appendChild(entry);
		
		entry = document.createElement("td");
		entry.innerHTML = newEvents[i].date;
		row.appendChild(entry);
		
		entry = document.createElement("td");
		entry.innerHTML = newEvents[i].location;
		row.appendChild(entry);
		entry = document.createElement("td");
		
		entry.innerHTML = newEvents[i].details;
		row.appendChild(entry);
		
		
		entry = document.createElement("td");
		entry.innerHTML='<span class="addtocalendar atc-style-blue"><var class="atc_event"><var class="atc_date_start">2016-05-04 12:00:00</var><var class="atc_date_end">2016-05-04 14:00:00</var><var class="atc_timezone">America/New_York</var><var class="atc_title">Sample Event</var><var class="atc_description">Sample Description</var><var class="atc_location">Sample Location</var></var></span>';
		row.appendChild(entry);
		
		tablebody.appendChild(row);
	}
	
	
}

window.onload = function() {
	interests = JSON.parse(localStorage.getItem("interests"));
	/* convert interests from string to array for if statement*/
	console.log(interests);
	
	selectEventsByInterest();
	drawTable();
};	

//Add to calendar script
(function () {
	if (window.addtocalendar) if (typeof window.addtocalendar.start == "function") return;
	if (window.ifaddtocalendar == undefined) { 
		window.ifaddtocalendar = 1;
		var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
		s.type = 'text/javascript';s.charset = 'UTF-8'; 
		s.async = true;
		s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
	var h = d[g]('body')[0];h.appendChild(s); }
	})();
		