#Generating IPA
executeXcodeIpaBuild(){

cd  Zz_10008

/bin/sh -c "sleep 10 ; echo Downloading Geppetto icon"

curl https://raw.githubusercontent.com/DHINAKAR-P/GeppettoIcon/master/icon.png >resources/icon.png

/bin/sh -c "sleep 10 ; echo Downloading Geppetto splash Screen icon"

curl  https://raw.githubusercontent.com/DHINAKAR-P/GeppettoIcon/master/splash.png >resources/splash.png

/bin/sh -c "sleep 10 ; echo IOS_Platform_Removed"

/bin/sh -c "sleep 10 ; echo installing NPM "

npm install

/bin/sh -c "sleep 10 ; echo Building Ionic"

ionic cordova platform add ios --no-interactive

#ionic cordova resources --splash --icon --no-interactive

cordova prepare

/bin/sh -c "sleep 10 ; echo Zz_10008_Access_Granted"

security -v unlock-keychain -p "g5eBCuKV" "login.keychain"

/bin/sh -c "sleep 10 ; echo IPA BUILD and Archive Started"

 ionic cordova build ios --no-interactive --no-resources --no-platforms --buildConfig=build.json --device --release

/bin/sh -c "sleep 10 ; echo IPA Generated"

cd ~/Desktop/Zz_10008/projects/mobile/ios/Zz_10008/platforms/ios/build/device

curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@Zz_10008.ipa --verbose >IpaUploadSucess.json

cd ~/Desktop/Zz_10008/

exit 0
}

executeXcodeIpaBuildTablet(){

#this cd refer inside the project dir in mac mini desktop

cd  Zz_10008

/bin/sh -c "sleep 10 ; echo Downloading Geppetto icon"

curl https://raw.githubusercontent.com/DHINAKAR-P/GeppettoIcon/master/icon.png >resources/icon.png

/bin/sh -c "sleep 10 ; echo Downloading Geppetto splash Screen icon"

curl  https://raw.githubusercontent.com/DHINAKAR-P/GeppettoIcon/master/splash.png >resources/splash.png

npm install

npm install ionic-angular@3.2.1 --save

ionic cordova platform add ios --no-interactive

#ionic cordova resources --splash --icon --no-interactive

cordova prepare


security -v unlock-keychain -p "g5eBCuKV" "login.keychain"


ionic cordova build ios --no-interactive --no-resources --no-platforms --buildConfig=build.json --device --release


cd ~/Desktop/Zz_10008/projects/Tablet/ios/Zz_10008/platforms/ios/build/device

curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@Zz_10008_tablet.ipa --verbose >IpaUploadSucess.json

cd ~/Desktop/Zz_10008/

exit 0
}
# call arguments verbatim:
$@