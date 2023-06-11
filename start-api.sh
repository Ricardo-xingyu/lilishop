#版本 注意，需要跟随版本号进行调整
version=4.2.4
#代码目录
code_path=/home/source/lilishop
#运行目录
run_path=/home/source/api/

mkdir -p ${code_path}
mkdir -p ${run_path}
cd ${code_path}
mvn clean install -DskipTests

ps -ef |grep java |grep buyer  |grep -v 'grep'|awk '{print $2}'  | xargs kill -9
ps -ef |grep java |grep seller  |grep -v 'grep'|awk '{print $2}'  | xargs kill -9
ps -ef |grep java |grep manager  |grep -v 'grep'|awk '{print $2}'  | xargs kill -9
ps -ef |grep java |grep common  |grep -v 'grep'|awk '{print $2}'  | xargs kill -9
ps -ef |grep java |grep consumer  |grep -v 'grep'|awk '{print $2}'  | xargs kill -9

rm -rf ${run_path}*.jar
mv ${code_path}/common-api/target/common-api-$version.jar ${run_path}
mv ${code_path}/buyer-api/target/buyer-api-$version.jar ${run_path}
mv ${code_path}/consumer/target/consumer-$version.jar ${run_path}
mv ${code_path}/manager-api/target/manager-api-$version.jar ${run_path}
mv ${code_path}/seller-api/target/seller-api-$version.jar ${run_path}

cd ${run_path}

mkdir logs

nohup java -Xmx256m -Xms128m -Xss256k  -jar manager-api-$version.jar> logs/manager.out  &
nohup java -Xmx256m -Xms128m -Xss256k  -jar common-api-$version.jar> logs/common.out  &
nohup java -Xmx256m -Xms128m -Xss256k  -jar buyer-api-$version.jar> logs/buyer.out  &
nohup java -Xmx256m -Xms128m -Xss256k  -jar consumer-$version.jar> logs/consumer.out  &
nohup java -Xmx256m -Xms128m -Xss256k  -jar seller-api-$version.jar> logs/seller.out  &

