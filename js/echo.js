function echo()
{
  console.log(arguments); 
    var output = "";
    for (var i=0; i < arguments.length; i++)
    {
        output += '<li>' + arguments[i] + '</li>';
    }
    document.write( output );
}

echo('');
echo('bla');
echo('foo', 'bar', 'baz');
