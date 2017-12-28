sendInvitesTotesters (){
/bin/sh -c "sleep 10 ; echo AutpProvision_Finished"
echo '**********************invitation sending *************************'


echo "AppID    : $1"
echo "BuildID  : $2"
echo "EmailID  : $3"

curl -H "X-InstallrAppToken:ODVP3Rjlz3GQe33wMbPNWL1DAuFJ6pi4" https://www.installrapp.com/apps/$1/builds/$2/team.json   -F "notify=$3"

#gradle -q sendInvites
/bin/sh -c "sleep 10 ; echo Inivitaion set"
echo '**********************invitation Sent *************************'
kill $(ps aux | grep 'Xcode' | awk '{print $2}')
echo '**********************Xcode closed*************************'
pwd
rm -rf ~/Documents/*
exit 1
}
# call arguments verbatim:
$@
pwd