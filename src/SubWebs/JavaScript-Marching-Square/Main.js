const canvas = document.getElementById("PlayersCanvas");
const ctx = canvas.getContext("2d");
const rez = 10;
var Cols,Rows;
var Layout = [];
window.onload = function() {
    Cols = canvas.width / rez;
    Rows = canvas.height / rez;
    
    

    for (var i=0;i<Rows;i++)
    {
      var data = [];
      for (var j=0;j<Cols;j++)
      {
        data.push('');
      }
    
      Layout.push(data);
    
    }    
    

    for (i=0;i < Cols;i++){
        for(j=0;j < Rows;j++){
            Layout[i][j] = Math.floor(Math.random(0) * 2)
        }
    }
    //console.log(Layout)
    Draw()
}

function Draw(){
    /*
    for (i=0;i < Cols;i++){
        for(j=0;j < Rows;j++){
            ctx.beginPath();
            ctx.arc(i*rez,j*rez, 1, 0, Math.PI*2, false);
            ctx.fillStyle = 'rgb('+Layout[i][j]*255+','+Layout[i][j]*255+','+Layout[i][j]*255+')';
            //ctx.rotate(Math.PI / 45);
            ctx.fill();
            
            ctx.closePath();
        }
    }
    */
    for (i=0;i < Cols - 1;i++){
        for(j=0;j < Rows - 1;j++){
            var x = i * rez;
            var y = j * rez;
            var A = [x + rez*0.5,y];
            var B = [x + rez,y + rez*0.5]
            var C = [x + rez*0.5,y + rez]
            var D = [x, y + rez*0.5]

            /*
            ctx.moveTo(0, 0);
            ctx.lineTo(300, 150);
            ctx.stroke();
            */
            state = Get_State(Layout[i][j],Layout[i+1][j],Layout[i+1][j+1],Layout[i][j+1])
            
            /*
            ctx.beginPath()
            ctx.moveTo(A[0],A[1])
            ctx.lineTo(B[0],B[1])
            ctx.stroke()
            ctx.closePath()
            */

            switch(state){
                case 1:
                    Draw_Line(C,D)
                    break;
                case 2:
                    Draw_Line(B,C)
                    break;
                case 3:
                    Draw_Line(B,D)
                    break;
                case 4:
                    Draw_Line(A,B)
                    break;
                case 5:
                    Draw_Line(A,D)
                    Draw_Line(B,C)
                    break;
                case 6:
                    Draw_Line(A,C)
                    break;
                case 7:
                    Draw_Line(A,D)
                    break;
                case 8:
                    Draw_Line(A,D)
                    break;
                case 9:
                    Draw_Line(A,C)
                    break;
                case 10:
                    Draw_Line(A,B)
                    Draw_Line(C,D)
                    break;
                case 11:
                    Draw_Line(A,B)
                    break;
                case 12:
                    Draw_Line(B,D)
                    break;
                case 13:
                    Draw_Line(B,C)
                    break;
                case 14:
                    Draw_Line(D,C)
                    break;
                default:
                    break;
                
            
            }

        }

    }
}

function Draw_Line(A,B){
    ctx.beginPath()
    ctx.moveTo(A[0],A[1])
    ctx.lineTo(B[0],B[1])
    ctx.stroke()
    ctx.closePath()
}

function Get_State(a,b,c,d){
    return a * 8 + b * 4 + c * 2 + d * 1
}