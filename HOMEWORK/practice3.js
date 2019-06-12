function hw(n)
{
 for(var i=1;i<n;i+=0.01)
  {
     if(i*i>n) 
    {
        console.log(i);
        break;
     }
  }
}
hw(9);