# HCI Course Project - Android App

## Project Overview

This project is part of the HCI course in the 6th semester and focuses on developing an Android application that adheres to Jakob Nielsen's usability heuristics and integrates the Google Fit API to count and display footsteps.

## Features

- **Usability**: Incorporates Jakob Nielsen's 10 usability heuristics to ensure a seamless user experience.
- **Fitness Tracking**: Utilizes Google Fit API to track and display user footsteps in real-time.

## Jakob Nielsen's Usability Heuristics

![Jakob Nielsen's Heuristics](https://user-images.githubusercontent.com/12345678/heuristics.jpg)

1. **Visibility of system status**: The app will keep users informed through appropriate feedback within a reasonable time.
2. **Match between system and the real world**: The app will speak the users' language, using familiar concepts.
3. **User control and freedom**: Users can easily exit from unwanted actions.
4. **Consistency and standards**: The app will follow platform conventions.
5. **Error prevention**: Prevent errors by providing careful design and clear options.
6. **Recognition rather than recall**: Minimize user memory load by making objects, actions, and options visible.
7. **Flexibility and efficiency of use**: The app will cater to both novice and experienced users.
8. **Aesthetic and minimalist design**: Only relevant information will be displayed.
9. **Help users recognize, diagnose, and recover from errors**: Error messages will be plain-language and offer solutions.
10. **Help and documentation**: Provide easy access to help and documentation.

## Google Fit API

![Google Fit API](https://user-images.githubusercontent.com/12345678/googlefit.jpg)

The Google Fit API enables the app to:

- **Track Footsteps**: Count and display the number of steps taken by the user.
- **Fitness Data Integration**: Aggregate fitness data from different sources and present it in a unified manner.

## Setup and Installation

1. **Clone the Repository**
    ```bash
    https://github.com/ShahxHussain/HCI-Course-Project-6th-semester
    cd hci-course-project
    ```

2. **Open in VSCode**
   - Open VSCode and select "Open Folder".
   - Navigate to the cloned repository and open it.

3. **Configure Google Fit API**
   - Follow the [Google Fit API setup guide](https://developers.google.com/fit/android/get-started) to configure your project.
   - Add the necessary API keys and permissions in your `AndroidManifest.xml`.

4. **Build and Run**
   - Connect your Android device or use an emulator.
   - Use Expo to build and launch the app.
   ```bash
   expo start










--------------------------------------------------------------------------------------------


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
