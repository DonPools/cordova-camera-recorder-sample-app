export CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL=https\://services.gradle.org/distributions/gradle-5.6.4-all.zip

build: build-npm-project
	cordova build android

build-npm-project:
	cd npm_project && yarn build
	rm -rf www
	mv npm_project/dist ./www

deploy-emulator: build
	adb -s emulator-5554 install ./platforms/android/app/build/outputs/apk/debug/app-debug.apk

update-plugin:
	-cordova plugin remove cordova-plugin-camera-recorder
	cordova plugin add ../CordovaCameraRecorder --no-save

clean:
	rm -rf ./platforms
	rm -rf ./plugins
	rm -rf ./node_modules