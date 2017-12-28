executemobile(){
echo 'inside mobile'
echo 'directory changes'
cd   projects/mobile/android/platforms/android/build/outputs/apk/
pwd
echo ' APK file uploaded'
curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@android-debug.apk --verbose >ApkUploadSucess.json
}
executetablet(){
echo 'inside tablet'
echo 'directory changes'
cd   projects/Tablet/android/platforms/android/build/outputs/apk/
pwd
echo ' APK file uploaded'
curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4"  https://www.installrapp.com/apps.json -F qqfile=@android-debug.apk --verbose >ApkUploadSucess.json
}
# call arguments verbatim:
$@