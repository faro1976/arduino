var preloadThese = new Array();

preloadThese[0] = 'homeOver.jpg';
preloadThese[1] = 'aboutOver.jpg';
preloadThese[2] = 'contactOver.jpg';
preloadThese[3] = 'blogOver.jpg';
preloadThese[4] = 'supportOver.jpg';
preloadThese[5] = 'forumsOver.jpg';
preloadThese[6] = 'tutorialsOver.jpg';
preloadThese[7] = 'chatOver.jpg';
preloadThese[8] = 'videosOver.jpg';
preloadThese[9] = 'jobsOver.jpg';

var preloaded=new Array();
for (i=0;i<preloadThese.length;i++)
	{
		preloaded[i]=new Image();
		preloaded[i].src="includes/templates/adafruit/images/" + preloadThese[i];
	}



function swapImage(target, image)
{
	document.getElementById(target).src  = "includes/templates/adafruit/images/" + image;
}
function swapImage2(target, linkTarget, imageMed, imageLar)
{
	document.getElementById(target).src  = "" + imageMed;
	document.getElementById(linkTarget).href = "javascript:popupWindow(\"" + imageLar + "\")";
}


function toggleSubcats(cid)
{
    a = document.getElementById('category' + cid);
    if(document.getElementById('subcategory' + cid))
	{
	    side = document.createElement('div');
	    side.innerHTML = '&#x25BA';
	    down = document.createElement('div');
	    down.innerHTML = '&#x25BC';

    if(a.innerHTML == side.innerHTML)
	{
	    document.getElementById('subcategory' + cid).style.display = 'inline';
	    a.innerHTML = '&#x25BC;';
	}
    else
	{
	    document.getElementById('subcategory' + cid).style.display = 'none';
	    a.innerHTML = '&#x25BA;';
	}
	}
}

