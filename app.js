// Declare constants for the possible emoji values 
const BALLOON_CONTENT = '🎈';
const BOOM_CONTENT = '💥';

// Function to initialize the balloon content and set to default 30px size
function initializeContent()
{
    getContent().innerHTML = BALLOON_CONTENT;
    getContent().style.fontSize = '30px';
}

// Function to return the <div> containing the emoji
function getContent() 
{
    return document.querySelector('#content');
}

// Function to set the pixel size of the <div> 
function setContentSize(pixelSize)
{
    getContent().style.fontSize = pixelSize +'px';
}

// Function to retrieve the current size of the emoji. Returns as an Integer
function getContentSize()
{
    return parseInt(getContent().style.fontSize);
}

// Handler function for when the user interacts with the keyboard
const handler = function(event)
{
    // Gets the current content size
    pixelSize = getContentSize()

    // User presses the up key
    if(event.keyCode === 38 || event.keyCode === 73)
    {
        if(pixelSize == 60)
        {
            getContent().innerHTML = BOOM_CONTENT + '<br> DONE';
            document.removeEventListener('keyup', handler);
        }
        else 
        {
            setContentSize(pixelSize + 10)
        }
    } 
    // User presses the down key
    else if(event.keyCode === 40 || event.keyCode === 68)
    {
        if(pixelSize == 10)
        {
            getContent().innerHTML = 'DONE';
            setContentSize(50);
            document.removeEventListener('keyup', handler);
        }
        else 
        {
            setContentSize(pixelSize - 10);
        }
    }
}


document.addEventListener('keyup', handler);


