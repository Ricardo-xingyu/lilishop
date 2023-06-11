code_path=/home/source/lilishop-ui

cd ${code_path}/manager
yarn install
yarn build

cd ${code_path}/seller
yarn install
yarn build

cd ${code_path}/buyer
yarn install
yarn build

