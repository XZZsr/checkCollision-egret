this.collision=this.collision||{};(function(){collision.checkCollision=function(bitmap1,bitmap2,isPixel){var bitmap2CenterX=bitmap2.x+bitmap2.width/2,bitmap2CenterY=bitmap2.y+bitmap2.height/2,bitmap1CenterX=bitmap1.x+bitmap1.width/2,bitmap1CenterY=bitmap1.y+bitmap1.height/2;if((Math.abs(bitmap2CenterX-bitmap1CenterX)<=bitmap1.width/2+bitmap2.width/2)&&Math.abs(bitmap2CenterY-bitmap1CenterY)<=bitmap1.height/2+bitmap2.height/2){return isPixel?handleEgdeCollisions(getIntersectionRect(bitmap1,bitmap2)):true;}else{return false}
function getIntersectionRect(bitmap1,bitmap2){var bitmap1Right=bitmap1.x+bitmap1.width,bitmap1Bottom=bitmap1.y+bitmap1.height,bitmap2Right=bitmap2.x+bitmap2.width,bitmap2Bottom=bitmap2.y+bitmap2.height;var rect3x=Math.max(bitmap1.x,bitmap2.x),rect3y=Math.max(bitmap1.y,bitmap2.y),rect3Right=Math.min(bitmap1Right,bitmap2Right),rect3Bottom=Math.min(bitmap1Bottom,bitmap2Bottom);return{x:rect3x,y:rect3y,width:rect3Right-rect3x,height:rect3Bottom-rect3y}}
function handleEgdeCollisions(rect){var renderTextureA=new egret.RenderTexture(),renderTextureB=new egret.RenderTexture();renderTextureA.drawToTexture(bitmap1,new egret.Rectangle(rect.x-bitmap1.x,rect.y-bitmap1.y,rect.width,rect.height));renderTextureB.drawToTexture(bitmap2,new egret.Rectangle(rect.x-bitmap2.x,rect.y-bitmap2.y,rect.width,rect.height));var imgData1Data=renderTextureA.getPixels(0,0,rect.width,rect.height);var imgData2Data=renderTextureB.getPixels(0,0,rect.width,rect.height);for(var i=3,len=imgData1Data.length;i<len;i+=4){if(imgData1Data[i]>0&&imgData2Data[i]>0){return true}}
return false}}}());