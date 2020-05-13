//设置图片切换
let myImage = document.querySelector('img');
myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg')
    {
        myImage.setAttribute('src','images/other.gif');
    }
    else if(mySrc = 'images/other.gif')
    {
        myImage.setAttribute('src','images/firefox.jpg');
    }
}
//设置个性化欢迎信息
//获取新按钮和标题的应用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//个性化欢迎信息设置函数
function setUserName()
{
    let myName = prompt('请输入您的名字。');
    if(!myName || myName === null)
    {
        setUserName();
    }else
    {
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla酷毙了，' + myName;
    }
}
//初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }