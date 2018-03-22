var mqtt=require('mqtt');
var client  = mqtt.connect('mqtt://192.168.0.3');
client.on('connect',function()
{
client.subscribe('nonmasterd30');
client.subscribe('nonmasterd31');
client.subscribe('master3lat1');
client.subscribe('master3long1');
client.subscribe('master3lat2');
client.subscribe('master3long2');
client.subscribe('master3lat3');
client.subscribe('master3long3');
client.subscribe('m1s3lat3');
client.subscribe('m1s3long3');
client.subscribe('m2s3lat3');
client.subscribe('m2s3long3');

});


client.on('message', function (topic, message) {

if(topic=="nonmasterd30")
{
console.log("Non Master"+" "+"latitude ="+ " "+message.toString());
}
if(topic=="nonmasterd31")
{
console.log("Non Master"+" "+"Longitude="+" "+message.toString());
}
if(topic=="master3lat1")
{
console.log("MASTER 3");
client.publish('m3s1lat1',message.toString());
console.log("DRONE 1 latitude ="+ " "+message.toString());
}
if(topic=="master3long1")
{
client.publish('m3s1long1',message.toString());
console.log("DRONE 1 Longitude="+" "+message.toString());
}
if(topic=="master3lat2")
{
client.publish('m3s2lat2',message.toString());
console.log("DRONE 2 latitude ="+ " "+message.toString());
}
if(topic=="master3long2")
{
client.publish('m3s2long2',message.toString());
console.log("DRONE 2 Longitude="+" "+message.toString());
}
if(topic=="master3lat3")
{

console.log("DRONE 3 latitude ="+ " "+message.toString());
}
if(topic=="master3long3")
{
console.log("DRONE 3 Longitude="+" "+message.toString());
}
if(topic=="m1s3lat3")
{
console.log("Sent from master1");
console.log("latitude ="+ " "+message.toString());
}
if(topic=="m1s3long3")
{
console.log("Longitude="+" "+message.toString());
}
if(topic=="m2s3lat3")
{
console.log("sent from master 2");
console.log("latitude ="+ " "+message.toString());
}
if(topic=="m2s3long3")
{
console.log("Longitude="+" "+message.toString());
}


});


