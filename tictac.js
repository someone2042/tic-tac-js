var m=[['','','',],['','','',],['','','',]];
var n=0
function add(i,j)
{
    if(n%2==0)
    {
        m[i][j]='X';
        document.getElementById(i*3+j).innerText="X";
        document.getElementById(i*3+j).setAttribute('onclick','');
        if(win('X'))
        {
            document.getElementById('cont').style.translate='0px';
            document.getElementById('cont').style.scale='1';
            document.getElementById('cont').style.display='grid';
            document.getElementById('p').innerText='PLAYER 1 WIN';
        }
        draw()
    }
    else
    {
        m[i][j]='O';
        document.getElementById(i*3+j).setAttribute('onclick','');
        document.getElementById(i*3+j).innerText="O";
        if(win('O'))
        {
            document.getElementById('cont').style.translate='0px';
            document.getElementById('cont').style.scale='1';
            document.getElementById('cont').style.display='grid';
            document.getElementById('p').innerText='PLAYER 2 WIN'
        }
        draw()
    }
    n++;
}

function win(c)
{
    if(m[0][0]==c&&m[0][1]==c&&m[0][2]==c)
    {
        return true;
    }
    if(m[1][0]==c&&m[1][1]==c&&m[1][2]==c)
    {
        return true;
    }
    if(m[2][0]==c&&m[2][1]==c&&m[2][2]==c)
    {
        return true;
    }
    if(m[0][0]==c&&m[1][0]==c&&m[2][0]==c)
    {
        return true;
    }
    if(m[0][1]==c&&m[1][1]==c&&m[2][1]==c)
    {
        return true;
    }
    if(m[0][2]==c&&m[1][2]==c&&m[2][2]==c)
    {
        return true;
    }
    if(m[0][0]==c&&m[1][1]==c&&m[2][2]==c)
    {
        return true;
    }
    if(m[0][2]==c&&m[1][1]==c&&m[2][0]==c)
    {
        return true;
    }
}
function draw()
{
    if(!win('X')&&!win('O'))
    {
        var cont =true;
        for(var i=0;i<3;i++)
        {
            for(var j=0;j<3;j++)
            {
                if(m[i][j]=='')
                {
                    cont=false;
                }
            }
        }
    }
    if(cont)
    {
        document.getElementById('cont').style.translate='0px';
        document.getElementById('cont').style.scale='1';
        document.getElementById('cont').style.display='grid';
        document.getElementById('p').innerText='DRAW'
    }
}