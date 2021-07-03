function NavToTop()
{
	document.getElementById("mynavbar").classList.add("fixed-top");
}

function UpdateTable(event)
{
	let mname = document.getElementById("yourname").value;
	let mskill = document.getElementById("myskill").value;
	let mprof = document.getElementById("myproficiency").value;
	let mystring = "<tr><td>"+mname+"</td><td>"+mskill+"</td><td>"+mprof+"</td></tr>";
	document.getElementById("skilltablebody").innerHTML += mystring;

	document.getElementById("yourname").value = "";
	document.getElementById("myskill").value = "";
	document.getElementById("myproficiency").value = "Beginner";

	event.preventDefault();
}

let num = 1;
const captext = [
	`<h4 id="interhed">May 2021 Ping! Magazine Cover</h4><br><p>I made this cover page to symbolise the desire of students to return to campus, during the COVID-19 quarantine period. <br>The campus is represented as Jagruti, the famous Banyan tree which the institute logo is based on. </p>`,

	`<h4 id="interhed">IIITH UG2K20 Batch Logo (Unofficial)</h4><br><p>I took inspiration from Jagruti for this icon. The six branches of the tree shown here represent the six modes of admission into IIIT-H's undergraduate programmes. <br>The six branches combine to form the stem of the tree of knowledge and enlightenment. </p>`,

	`<h4 id="interhed">Felicity Recap Posters</h4><br><p>I contributed to Ping!'s efforts of daily coverage for Felicity 2021. Along with other designers, I made three total sets of designs, one per day of felicity, with a separate design for every event that took place on that day.</p>`,

	`<h4 id="interhed">Armored Titan Art (Attack On Titan)</h4><br><p>As a personal piece, I made this low-poly art of the Armored Titan from the anime 'Attack on Titan'. I used a Voronoi diagram to create the various polygons. </p>`,

	`<h4 id="interhed">Cover Page For My Grandmother's Book</h4><br><p>I made this coverpage for my grandma's book about her thoughts and opinions on the Bhagvad Gita. The cover depicts a peacock's feather, symbolising Krishna, and an eye, symbolising observation and introspection.</p>`];
function Carousel()
{
	num = (num) % 5 + 1;
	document.getElementById("mycarousel").src = "../img/" + num + ".png";
	var caps = document.getElementById("caroucaptions");
	caps.innerHTML = captext[num-1];
}

function NavBarHover1()
{
	document.getElementById("navitem1").style = "color: #fac29a; ";
}
function NavBarOut1()
{
	document.getElementById("navitem1").style = "color: #d5d8da;";
}
function NavBarHover2()
{
	document.getElementById("navitem2").style = "color: #fac29a;";
}
function NavBarOut2()
{
	document.getElementById("navitem2").style = "color: #d5d8da;";
}
function NavBarHover3()
{
	document.getElementById("navitem3").style = "color: #fac29a;";
}
function NavBarOut3()
{
	document.getElementById("navitem3").style = "color: #d5d8da;";
}
