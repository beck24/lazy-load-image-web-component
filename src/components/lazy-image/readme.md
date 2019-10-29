# lazy-image



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                              | Type     | Default                   |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------- |
| `alt`        | `alt`         | This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded. | `string` | `""`                      |
| `rootMargin` | `root-margin` | Defines the distance from the viewport that the image will load                                                                                                                                                          | `string` | `"200px 50px 200px 50px"` |
| `src`        | `src`         | The image URL. This attribute is mandatory for the `<img>` element.                                                                                                                                                      | `string` | `undefined`               |


## Events

| Event             | Description                                 | Type                |
| ----------------- | ------------------------------------------- | ------------------- |
| `lazyImgDidLoad`  | Emitted when the image has finished loading | `CustomEvent<void>` |
| `lazyImgError`    | Emitted when the img fails to load          | `CustomEvent<void>` |
| `lazyImgWillLoad` | Emitted when the img src has been set       | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
