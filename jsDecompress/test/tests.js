QUnit.test( "Basic success test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Basic fail test", function( assert ) {
  assert.notOk( 4 == "5", "Passed!");
});