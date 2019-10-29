import {Component, Prop, Element, h, State, Watch, Event, EventEmitter, Host} from '@stencil/core';

@Component({
  tag: 'lazy-image',
  styleUrl: 'lazy-image.css',
  shadow: true
})
export class LazyImage {

  private io?: IntersectionObserver;

  @Element() el!: HTMLElement;

  @State() loadSrc?: string;

  @State() loadError?: () => void;

  /**
   * This attribute defines the alternative text describing the image.
   * Users will see this text displayed if the image URL is wrong,
   * the image is not in one of the supported formats, or if the image is not yet downloaded.
   */
  @Prop() alt?: string = "";

  /**
   * The image URL. This attribute is mandatory for the `<img>` element.
   */
  @Prop() src?: string;
  @Watch('src')
  srcChanged() {
    this.addIO();
  }

  /** Defines the distance from the viewport that the image will load */
  @Prop() rootMargin?: string = "200px 50px 200px 50px";

  /** Emitted when the img src has been set */
  @Event() lazyImgWillLoad!: EventEmitter<void>;

  /** Emitted when the image has finished loading */
  @Event() lazyImgDidLoad!: EventEmitter<void>;

  /** Emitted when the img fails to load */
  @Event() lazyImgError!: EventEmitter<void>;

  componentDidLoad() {
    this.addIO();
  }

  private addIO() {
    if (this.src === undefined) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.removeIO();
      this.io = new IntersectionObserver(data => this.onIntersection(data), { rootMargin: this.rootMargin });

      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }

  private onIntersection(data) {
      // because there will only ever be one instance
      // of the element we are observing
      // we can just use data[0]
      if (data[0].isIntersecting) {
        this.load();
        this.removeIO();
      }
  }

  private load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.lazyImgWillLoad.emit();
  }

  private onLoad = () => {
    this.lazyImgDidLoad.emit();
  }

  private onError = () => {
    this.lazyImgError.emit();
  }

  private removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  render() {
    return (
      <Host>
        <img
          decoding="async"
          src={this.loadSrc}
          alt={this.alt}
          onLoad={this.onLoad}
          onError={this.loadError}
        />
      </Host>
    );
  }
}
