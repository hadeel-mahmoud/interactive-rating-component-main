# Introduction

React rating component that consists of a rating card which allows the user to enter a rating number between 1 and 5 then displays a thank you card once the user has submitted their rating. All the styling and card contents are customizable.

![Rating View](RatingView.png)
![Thank You View](ThankYouView.png)

# Installation

`npm i @hadeel-mahmoud/interactive-rating-widget`

# Usage

```js
import RatingView from "@hadeel-mahmoud/interactive-rating-widget";

<RatingView />;
```

# Properties

| Property                            | Type   | Description                                                                                                                                                                                        |
| ----------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `containerStyle`                    | Object | Style of overall wrapper                                                                                                                                                                           |
| `ratingViewImage`                   | Image  | The image that will appear in the rating view                                                                                                                                                      |
| `ratingViewHeaderText`              | Text   | The header text of rating view                                                                                                                                                                     |
| `ratingViewBodyText`                | Text   | The body text content of rating view                                                                                                                                                               |
| `ratingViewSubmitButtonText`        | Text   | The submit button text                                                                                                                                                                             |
| `ratingViewImageContainerStyle`     | Object | The circular image container style                                                                                                                                                                 |
| `ratingViewImageStyle`              | Object | The style of the image in rating view                                                                                                                                                              |
| `ratingViewHeaderStyle`             | Object | The style of header text in rating view                                                                                                                                                            |
| `ratingViewDescriptionStyle`        | Object | The style of description text in rating view                                                                                                                                                       |
| `ratingViewSubmitButtonStyle`       | Object | The style of submit button                                                                                                                                                                         |
| `ratingViewNumberContainerStyle`    | Object | The style of rating numbers container                                                                                                                                                              |
| `ratingViewNumberStyle`             | Object | The style of the rating numbers. Note that in order to edit the style of the number of hover use the following syntax in the object : "--hover-color": "black","--hover-background-color": "pink", |
| `ratingViewSelectedNumberStyle`     | Object | The style of the selected rating value                                                                                                                                                             |
| `thankYouViewImage`                 | Image  | The image that will appear in the thank you view                                                                                                                                                   |
| `thankYouText`                      | Text   | The thank you text that will appear.                                                                                                                                                               |
| `thankYouViewRatingResultText`      | Text   | The thank you view rating result text should contain the following syntax so that the value selected by the user will be modified on your inserted text: "You selected {value} out of 5"           |
| `thankYouViewDescriptionText`       | Text   | The body text of thank you view                                                                                                                                                                    |
| `thankYouViewImageStyle`            | Object | The style of the thank you image                                                                                                                                                                   |
| `thankYouViewRatingResultTextStyle` | Object | The style of the rating result text                                                                                                                                                                |
| `thankYouViewHeaderStyle`           | Object | The style of thank you view header                                                                                                                                                                 |
| `thankYouViewDescriptionTextStyle`  | Object | The style of the thank you view body text                                                                                                                                                          |
