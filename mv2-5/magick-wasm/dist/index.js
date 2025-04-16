function dr(S) {
  return S instanceof Int8Array || S instanceof Uint8Array || S instanceof Uint8ClampedArray;
}
class sr {
  fileName;
  data;
  constructor(a, s) {
    this.fileName = a, this.data = s;
  }
}
const or = {
  XmlResourceFiles: {
    log: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE logmap [
<!ELEMENT logmap (log)+>
<!ELEMENT log (#PCDATA)>
<!ATTLIST log events CDATA #IMPLIED>
<!ATTLIST log output CDATA #IMPLIED>
<!ATTLIST log filename CDATA #IMPLIED>
<!ATTLIST log generations CDATA #IMPLIED>
<!ATTLIST log limit CDATA #IMPLIED>
<!ATTLIST log format CDATA #IMPLIED>
]>
<logmap>
  <log events="None"/>
  <log output="Debug"/>
  <log filename="Magick-%g.log"/>
  <log generations="3"/>
  <log limit="2000"/>
  <log format="%t %r %u %v %d %c[%p]: %m/%f/%l/%d
  %e"/>
</logmap>
`,
    policy: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE policymap [
<!ELEMENT policymap (policy)*>
<!ATTLIST policymap xmlns CDATA #FIXED "">
<!ELEMENT policy EMPTY>
<!ATTLIST policy xmlns CDATA #FIXED "">
<!ATTLIST policy domain NMTOKEN #REQUIRED>
<!ATTLIST policy name NMTOKEN #IMPLIED>
<!ATTLIST policy pattern CDATA #IMPLIED>
<!ATTLIST policy rights NMTOKEN #IMPLIED>
<!ATTLIST policy stealth NMTOKEN #IMPLIED>
<!ATTLIST policy value CDATA #IMPLIED>
]>
<policymap>
  <policy domain="cache" name="shared-secret" value="passphrase"/>
  <policy domain="coder" rights="none" pattern="EPHEMERAL" />
  <policy domain="coder" rights="none" pattern="MVG" />
  <policy domain="coder" rights="none" pattern="MSL" />
  <policy domain="path" rights="none" pattern="@*" />
  <policy domain="path" rights="none" pattern="|*" />
</policymap>
`
  }
};
class ni {
  constructor() {
    this.log = new sr("log.xml", or.XmlResourceFiles.log), this.policy = new sr("policy.xml", or.XmlResourceFiles.policy);
  }
  /**
   * Gets the default configuration.
   */
  static default = new ni();
  /**
   * Gets all the configuration files.
   */
  *all() {
    yield this.log, yield this.policy;
  }
  /// <summary>
  /// Gets the log configuration.
  /// </summary>
  log;
  /// <summary>
  /// Gets the policy configuration.
  /// </summary>
  policy;
}
class ei {
  /**
   * Initializes a new instance of the {@link MagickDefine} class.
   * @param format
   * @param name The name of the define.
   * @param value The value of the define.
   */
  constructor(a, s, i) {
    this.format = a, this.name = s, this.value = i;
  }
  /**
   * Gets the format to set the define for.
   */
  format;
  /**
   * Gets the name of the define.
   */
  name;
  /**
   * Gets the value of the define.
   */
  value;
}
class Js {
  format;
  constructor(a) {
    this.format = a;
  }
  createDefine(a, s) {
    return typeof s == "boolean" ? new ei(this.format, a, s ? "true" : "false") : typeof s == "string" ? new ei(this.format, a, s) : new ei(this.format, a, s.toString());
  }
  hasValue(a) {
    return a != null;
  }
}
class jo {
  _x;
  _y;
  _paintMethod;
  /**
   * Initializes a new instance of the {@link DrawableColor} class.
   * @param x The X coordinate.
   * @param  y The Y coordinate.
   * @param paintMethod The paint method to use.
   */
  constructor(a, s, i) {
    this._x = a, this._y = s, this._paintMethod = i;
  }
  draw(a) {
    a.color(this._x, this._y, this._paintMethod);
  }
}
class Zs {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param color The color to use.
   */
  constructor(a) {
    this._color = a;
  }
  draw(a) {
    a.fillColor(this._color);
  }
}
class eo {
  _opacity;
  /**
   * Initializes a new instance of the {@link DrawableFillOpacity} class.
   * @param opacity The opacity.
   */
  constructor(a) {
    this._opacity = a;
  }
  draw(a) {
    a.fillOpacity(this._opacity.toDouble() / 100);
  }
}
class to {
  _pointSize;
  /**
   * Initializes a new instance of the {@link DrawableFontPointSize} class.
   * @param pointSize The point size.
   */
  constructor(a) {
    this._pointSize = a;
  }
  draw(a) {
    a.fontPointSize(this._pointSize);
  }
}
class io {
  /**
   * Initializes a new instance of the {@link LogEvent} class.
   * @param eventType - The type of the log message.
   * @param message - The log message.
   */
  constructor(a, s) {
    this.eventType = a, this.message = s ?? "";
  }
  /**
   * Gets the type of the log message.
   */
  eventType;
  /**
   * Gets the log message.
   */
  message;
}
const ro = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Enable the image's transparency channel. Note that normally Set should be used instead of
   * this, unless you specifically need to preserve the existing (but specifically turned Off)
   * transparency channel.
   */
  Activate: 1,
  /**
   * Associate the alpha channel with the image.
   */
  Associate: 2,
  /**
   * Set any fully-transparent pixel to the background color, while leaving it fully-transparent.
   * This can make some image file formats, such as PNG, smaller as the RGB values of transparent
   * pixels are more uniform, and thus can compress better.
   */
  Background: 3,
  /**
   * Turns 'On' the alpha/matte channel, then copies the grayscale intensity of the image, into
   * the alpha channel, converting a grayscale mask into a transparent shaped mask ready to be
   * colored appropriately. The color channels are not modified.
   */
  Copy: 4,
  /**
   * Disables the image's transparency channel. This does not delete or change the existing data,
   * it just turns off the use of that data.
   */
  Deactivate: 5,
  /**
   * Discrete.
   */
  Discrete: 6,
  /**
   * Disassociate the alpha channel from the image.
   */
  Disassociate: 7,
  /**
   * Copies the alpha channel values into all the color channels and turns 'Off' the image's
   * transparency, so as to generate a grayscale mask of the image's shape. The alpha channel
   * data is left intact just deactivated. This is the inverse of 'Copy'.
   */
  Extract: 8,
  /**
   * Off.
   */
  Off: 9,
  /**
  * On.
  */
  On: 10,
  /**
   * Enables the alpha/matte channel and forces it to be fully opaque.
   */
  Opaque: 11,
  /**
   * Composite the image over the background color.
   */
  Remove: 12,
  /**
   * Activates the alpha/matte channel. If it was previously turned off then it also
   * resets the channel to opaque. If the image already had the alpha channel turned on,
   * it will have no effect.
   */
  Set: 13,
  /**
   * As per 'Copy' but also colors the resulting shape mask with the current background color.
   * That is the RGB color channels is replaced, with appropriate alpha shape.
   */
  Shape: 14,
  /**
   * Activates the alpha/matte channel and forces it to be fully transparent. This effectively
   * creates a fully transparent image the same size as the original and with all its original
   * RGB data still intact, but fully transparent.
  */
  Transparent: 15,
  /**
   * Removes the alpha channel when the alpha value is opaque for all pixels.
   */
  OffIfOpaque: 16
}, F = {
  /**
   * Red.
   */
  Red: 0,
  /**
   * Cyan.
   */
  Cyan: 0,
  /**
   * Gray.
   */
  Gray: 0,
  /**
   * Green.
   */
  Green: 1,
  /**
   * Magenta.
   */
  Magenta: 1,
  /**
   * Blue.
   */
  Blue: 2,
  /**
   * Yellow.
   */
  Yellow: 2,
  /**
   * Black.
   */
  Black: 3,
  /**
   * Alpha.
   */
  Alpha: 4,
  /**
   * Index.
   */
  Index: 5,
  /**
   * Meta 0.
   */
  Meta0: 10,
  /**
   * Meta 1.
   */
  Meta1: 11,
  /**
   * Meta 2.
   */
  Meta2: 12,
  /**
   * Meta 3.
   */
  Meta3: 13,
  /**
   * Meta 4.
   */
  Meta4: 14,
  /**
   * Meta 5.
   */
  Meta5: 15,
  /**
   * Meta 6.
   */
  Meta6: 16,
  /**
   * Meta 7.
   */
  Meta7: 17,
  /**
   * Meta 8.
   */
  Meta8: 18,
  /**
   * Meta 9.
   */
  Meta9: 19,
  /**
   * Meta 10.
   */
  Meta10: 20,
  /**
   * Meta 11.
   */
  Meta11: 21,
  /**
   * Meta 12.
   */
  Meta12: 22,
  /**
   * Meta 13.
   */
  Meta13: 23,
  /**
   * Meta 14.
   */
  Meta14: 24,
  /**
   * Meta 15.
   */
  Meta15: 25,
  /**
   * Meta 16.
   */
  Meta16: 26,
  /**
   * Meta 17.
   */
  Meta17: 27,
  /**
   * Meta 18.
   */
  Meta18: 28,
  /**
   * Meta 19.
   */
  Meta19: 29,
  /**
   * Meta 20.
   */
  Meta20: 30,
  /**
   * Meta 21.
   */
  Meta21: 31,
  /**
   * Meta 22.
   */
  Meta22: 32,
  /**
   * Meta 23.
   */
  Meta23: 33,
  /**
   * Meta 24.
   */
  Meta24: 34,
  /**
   * Meta 25.
   */
  Meta25: 35,
  /**
   * Meta 26.
   */
  Meta26: 36,
  /**
   * Meta 27.
   */
  Meta27: 37,
  /**
   * Meta 28.
   */
  Meta28: 38,
  /**
   * Meta 29.
   */
  Meta29: 39,
  /**
   * Meta 30.
   */
  Meta30: 40,
  /**
   * Meta 31.
   */
  Meta31: 41,
  /**
   * Meta 32.
   */
  Meta32: 42,
  /**
   * Meta 33.
   */
  Meta33: 43,
  /**
   * Meta 34.
   */
  Meta34: 44,
  /**
   * Meta 35.
   */
  Meta35: 45,
  /**
   * Meta 36.
   */
  Meta36: 46,
  /**
   * Meta 37.
   */
  Meta37: 47,
  /**
   * Meta 38.
   */
  Meta38: 48,
  /**
   * Meta 39.
   */
  Meta39: 49,
  /**
   * Meta 40.
   */
  Meta40: 50,
  /**
   * Meta 41.
   */
  Meta41: 51,
  /**
   * Meta 42.
   */
  Meta42: 52,
  /**
   * Meta 43.
   */
  Meta43: 53,
  /**
   * Meta 44.
   */
  Meta44: 54,
  /**
   * Meta 45.
   */
  Meta45: 55,
  /**
   * Meta 46.
   */
  Meta46: 56,
  /**
   * Meta 47.
   */
  Meta47: 57,
  /**
   * Meta 48.
   */
  Meta48: 58,
  /**
   * Meta 49.
   */
  Meta49: 59,
  /**
   * Meta 50.
   */
  Meta50: 60,
  /**
   * Meta 51.
   */
  Meta51: 61,
  /**
   * Meta 52.
   */
  Meta52: 62,
  /**
   * Composite.
   */
  Composite: 64
}, X = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Red.
   */
  Red: 1,
  /**
   * Gray.
   */
  Gray: 1,
  /**
   * Cyan.
   */
  Cyan: 1,
  /**
   * Green.
   */
  Green: 2,
  /**
   * Magenta.
   */
  Magenta: 2,
  /**
   * Blue.
   */
  Blue: 4,
  /**
   * Yellow.
   */
  Yellow: 4,
  /**
   * Black.
   */
  Black: 8,
  /**
   * Alpha.
   */
  Alpha: 16,
  /**
   * Opacity.
   */
  Opacity: 16,
  /**
   * Index.
   */
  Index: 32,
  /**
   * Composite.
   */
  Composite: 31,
  /**
   * TrueAlpha.
   */
  TrueAlpha: 256,
  /**
   * RGB.
   */
  get RGB() {
    return this.Red | this.Green | this.Blue;
  },
  /**
   * CMYK.
   */
  get CMYK() {
    return this.Cyan | this.Magenta | this.Yellow | this.Black;
  },
  /**
   * CMYKA.
   */
  get CMYKA() {
    return this.Cyan | this.Magenta | this.Yellow | this.Black | this.Alpha;
  },
  /**
   * Meta 0
   */
  Meta0: 1 << F.Meta0,
  /**
   * Meta 1
   */
  Meta1: 1 << F.Meta1,
  /**
   * Meta 2
   */
  Meta2: 1 << F.Meta2,
  /**
   * Meta 3
   */
  Meta3: 1 << F.Meta3,
  /**
   * Meta 4
   */
  Meta4: 1 << F.Meta4,
  /**
   * Meta 5
   */
  Meta5: 1 << F.Meta5,
  /**
   * Meta 6
   */
  Meta6: 1 << F.Meta6,
  /**
   * Meta 7
   */
  Meta7: 1 << F.Meta7,
  /**
   * Meta 8
   */
  Meta8: 1 << F.Meta8,
  /**
   * Meta 9
   */
  Meta9: 1 << F.Meta9,
  /**
   * Meta 10
   */
  Meta10: 1 << F.Meta10,
  /**
   * Meta 11
   */
  Meta11: 1 << F.Meta11,
  /**
   * Meta 12
   */
  Meta12: 1 << F.Meta12,
  /**
   * Meta 13
   */
  Meta13: 1 << F.Meta13,
  /**
   * Meta 14
   */
  Meta14: 1 << F.Meta14,
  /**
   * Meta 15
   */
  Meta15: 1 << F.Meta15,
  /**
   * Meta 16
   */
  Meta16: 1 << F.Meta16,
  /**
   * Meta 17
   */
  Meta17: 1 << F.Meta17,
  /**
   * Meta 18
   */
  Meta18: 1 << F.Meta18,
  /**
   * Meta 19
   */
  Meta19: 1 << F.Meta19,
  /**
   * Meta 20
   */
  Meta20: 1 << F.Meta20,
  /**
   * Meta 21
   */
  Meta21: 1 << F.Meta21,
  /**
   * All.
   */
  All: 134217727
};
class ao {
  constructor(a, s, i, g) {
    this.red = a, this.green = s, this.blue = i, this.white = g;
  }
  /**
   * Gets the chromaticity red primary point.
   */
  red;
  /**
   * Gets the chromaticity green primary point.
   */
  green;
  /**
   * Gets the chromaticity blue primary point.
   */
  blue;
  /**
   * Gets the chromaticity white primary point.
   */
  white;
}
const E = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * CMY.
   */
  CMY: 1,
  /**
   * CMYK.
   */
  CMYK: 2,
  /**
   * Gray.
   */
  Gray: 3,
  /**
   * HCL.
   */
  HCL: 4,
  /**
   * HCLp.
   */
  HCLp: 5,
  /**
   * HSB.
   */
  HSB: 6,
  /**
   * HSI.
   */
  HSI: 7,
  /**
   * HSL.
   */
  HSL: 8,
  /**
   * HSV.
   */
  HSV: 9,
  /**
   * HWB.
   */
  HWB: 10,
  /**
   * Lab
   */
  Lab: 11,
  /**
   * LCH.
   */
  LCH: 12,
  /**
   * LCHab.
   */
  LCHab: 13,
  /**
   * LCHuv.
   */
  LCHuv: 14,
  /**
   * Log.
   */
  Log: 15,
  /**
   * LMS.
   */
  LMS: 16,
  /**
   * Luv.
   */
  Luv: 17,
  /**
   * OHTA.
   */
  OHTA: 18,
  /**
   * Rec601YCbCr.
   */
  Rec601YCbCr: 19,
  /**
   * Rec709YCbCr.
   */
  Rec709YCbCr: 20,
  /**
   * RGB.
   */
  RGB: 21,
  /**
   * scRGB.
   */
  scRGB: 22,
  /**
   * sRGB.
   */
  sRGB: 23,
  /**
   * Transparent.
   */
  Transparent: 24,
  /**
   * XyY.
   */
  XyY: 25,
  /**
   * XYZ.
   */
  XYZ: 26,
  /**
   * YCbCr.
   */
  YCbCr: 27,
  /**
   * YCC.
   */
  YCC: 28,
  /**
   * YDbDr.
   */
  YDbDr: 29,
  /**
   * YIQ.
   */
  YIQ: 30,
  /**
   * YPbPr.
   */
  YPbPr: 31,
  /**
   * YUV.
   */
  YUV: 32,
  /**
   * LinearGray.
   */
  LinearGray: 33,
  /**
   * Jzazbz.
   */
  Jzazbz: 34,
  /**
   * DisplayP3.
   */
  DisplayP3: 35,
  /**
   * Adobe98.
   */
  Adobe98: 36,
  /**
   * ProPhoto.
   */
  ProPhoto: 37,
  /**
   * Oklab.
   */
  Oklab: 38,
  /**
   * Oklch.
   */
  Oklch: 39,
  /**
   * CAT02LMS.
   */
  CAT02LMSC: 40
}, _r = {
  [E.Undefined]: "Undefined",
  [E.CMY]: "CMY",
  [E.CMYK]: "CMYK",
  [E.Gray]: "Gray",
  [E.HCL]: "HCL",
  [E.HCLp]: "HCLp",
  [E.HSB]: "HSB",
  [E.HSI]: "HSI",
  [E.HSL]: "HSL",
  [E.HSV]: "HSV",
  [E.HWB]: "HWB",
  [E.Lab]: "Lab",
  [E.LCH]: "LCH",
  [E.LCHab]: "LCHab",
  [E.LCHuv]: "LCHuv",
  [E.Log]: "Log",
  [E.LMS]: "LMS",
  [E.Luv]: "Luv",
  [E.OHTA]: "OHTA",
  [E.Rec601YCbCr]: "Rec601YCbCr",
  [E.Rec709YCbCr]: "Rec709YCbCr",
  [E.RGB]: "RGB",
  [E.scRGB]: "scRGB",
  [E.sRGB]: "sRGB",
  [E.Transparent]: "Transparent",
  [E.XyY]: "XyY",
  [E.XYZ]: "XYZ",
  [E.YCbCr]: "YCbCr",
  [E.YCC]: "YCC",
  [E.YDbDr]: "YDbDr",
  [E.YIQ]: "YIQ",
  [E.YPbPr]: "YPbPr",
  [E.YUV]: "YUV",
  [E.LinearGray]: "LinearGray",
  [E.Jzazbz]: "Jzazbz",
  [E.DisplayP3]: "DisplayP3",
  [E.Adobe98]: "Adobe98",
  [E.ProPhoto]: "ProPhoto",
  [E.Oklab]: "Oklab",
  [E.Oklch]: "Oklch",
  [E.CAT02LMSC]: "CAT02LMS"
};
class no {
  colorSpace = E.Undefined;
  copyright = null;
  description = null;
  manufacturer = null;
  model = null;
}
class so {
  _data;
  _index;
  constructor(a) {
    this._data = a, this._index = 0, this.isLittleEndian = !1;
  }
  get index() {
    return this._index;
  }
  isLittleEndian;
  readLong() {
    return this.canRead(4) ? this.isLittleEndian ? this.readLongLSB() : this.readLongMSB() : null;
  }
  readString(a) {
    if (a == 0)
      return "";
    if (!this.canRead(a))
      return null;
    let i = new TextDecoder("utf-8").decode(this._data.subarray(this._index, this._index + a));
    const g = i.indexOf("\0");
    return g != -1 && (i = i.substring(0, g)), this._index += a, i;
  }
  seek(a) {
    return a >= this._data.length ? !1 : (this._index = a, !0);
  }
  skip(a) {
    return this._index + a >= this._data.length ? !1 : (this._index += a, !0);
  }
  canRead(a) {
    return a > this._data.length ? !1 : this._index + a <= this._data.length;
  }
  readLongLSB() {
    let a = this._data[this._index];
    return a |= this._data[this._index + 1] << 8, a |= this._data[this._index + 2] << 16, a |= this._data[this._index + 3] << 24, this._index += 4, a;
  }
  readLongMSB() {
    let a = this._data[this._index] << 24;
    return a |= this._data[this._index + 1] << 16, a |= this._data[this._index + 2] << 8, a |= this._data[this._index + 3], this._index += 4, a;
  }
}
class si {
  _data = new no();
  _reader;
  constructor(a) {
    this._reader = new so(a);
  }
  static read(a) {
    const s = new si(a);
    return s.readColorSpace(), s.readTagTable(), s._data;
  }
  readColorSpace() {
    this._reader.seek(16);
    const a = this._reader.readString(4);
    a != null && (this._data.colorSpace = this.determineColorSpace(a.trimEnd()));
  }
  determineColorSpace(a) {
    switch (a) {
      case "CMY":
        return E.CMY;
      case "CMYK":
        return E.CMYK;
      case "GRAY":
        return E.Gray;
      case "HSL":
        return E.HSL;
      case "HSV":
        return E.HSV;
      case "Lab":
        return E.Lab;
      case "Luv":
        return E.Luv;
      case "RGB":
        return E.sRGB;
      case "XYZ":
        return E.XYZ;
      case "YCbr":
        return E.YCbCr;
      default:
        return E.Undefined;
    }
  }
  readTagTable() {
    if (!this._reader.seek(128))
      return;
    const a = this._reader.readLong();
    if (a != null)
      for (let s = 0; s < a; s++)
        switch (this._reader.readLong()) {
          case 1668313716:
            this._data.copyright = this.readTag();
            break;
          case 1684370275:
            this._data.description = this.readTag();
            break;
          case 1684893284:
            this._data.manufacturer = this.readTag();
            break;
          case 1684890724:
            this._data.model = this.readTag();
            break;
          default:
            this._reader.skip(8);
            break;
        }
  }
  readTag() {
    const a = this._reader.readLong(), s = this._reader.readLong();
    if (a === null || s === null)
      return null;
    const i = this._reader.index;
    if (!this._reader.seek(a))
      return null;
    const g = this.readTagValue(s);
    return this._reader.seek(i), g;
  }
  readTagValue(a) {
    switch (this._reader.readString(4)) {
      case "desc":
        return this.readTextDescriptionTypeValue();
      case "text":
        return this.readTextTypeValue(a);
      default:
        return null;
    }
  }
  readTextDescriptionTypeValue() {
    if (!this._reader.skip(4))
      return null;
    const a = this._reader.readLong();
    return a == null ? null : this._reader.readString(a);
  }
  readTextTypeValue(a) {
    return this._reader.skip(4) ? this._reader.readString(a) : null;
  }
}
class mr {
  constructor(a, s) {
    this.name = a, this.data = s;
  }
  name;
  data;
}
class oo extends mr {
  _data;
  constructor(a) {
    super("icc", a);
  }
  /**
   * Gets the color space of the profile.
   */
  get colorSpace() {
    return this.initialize(), this._data.colorSpace;
  }
  /**
   * Gets the copyright of the profile.
   */
  get copyright() {
    return this.initialize(), this._data.copyright;
  }
  /**
   * Gets the description of the profile.
   */
  get description() {
    return this.initialize(), this._data.description;
  }
  /**
   * Gets the manufacturer of the profile.
   */
  get manufacturer() {
    return this.initialize(), this._data.manufacturer;
  }
  /**
   * Gets the model of the profile.
   */
  get model() {
    return this.initialize(), this._data.model;
  }
  initialize() {
    this._data || (this._data = si.read(this.data));
  }
}
const cr = {
  /**
   * High resolution (double).
   */
  HighRes: 0,
  /**
   * Quantum.
   */
  Quantum: 1
};
class oi {
  constructor(a, s) {
    this.distortion = a, this.difference = s;
  }
  /**
   * Gets the difference image.
   */
  difference;
  /**
   * Gets the distortion.
   */
  distortion;
  /** @internal */
  static _create(a, s) {
    return new oi(a, s);
  }
}
class _o {
  constructor(a) {
    this.metric = a;
  }
  /**
   * Gets the distortion method to use.
   */
  metric;
  /**
   * Gets or sets the color that emphasize pixel differences.
   */
  highlightColor;
  /**
   * Gets or sets the color that de-emphasize pixel differences.
   */
  lowlightColor;
  /**
   * Gets or sets the color of pixels that are inside the read mask.
   */
  masklightColor;
  /** @internal */
  _setArtifacts(a) {
    this.highlightColor !== void 0 && a.setArtifact("compare:highlight-color", this.highlightColor), this.lowlightColor !== void 0 && a.setArtifact("compare:lowlight-color", this.lowlightColor), this.masklightColor !== void 0 && a.setArtifact("compare:masklight-color", this.masklightColor);
  }
}
const ti = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Alpha.
   */
  Alpha: 1,
  /**
   * Atop.
   */
  Atop: 2,
  /**
   * Blend.
   */
  Blend: 3,
  /**
   * Blur.
   */
  Blur: 4,
  /**
   * Bumpmap.
   */
  Bumpmap: 5,
  /**
   * Change mask.
   */
  ChangeMask: 6,
  /**
   * Clear.
   */
  Clear: 7,
  /**
   * Color burn.
   */
  ColorBurn: 8,
  /**
   * Color dodge.
   */
  ColorDodge: 9,
  /**
   * Colorize.
   */
  Colorize: 10,
  /**
   * Copy black.
   */
  CopyBlack: 11,
  /**
   * Copy blue.
   */
  CopyBlue: 12,
  /**
   * Copy.
   */
  Copy: 13,
  /**
   * Copy cyan.
   */
  CopyCyan: 14,
  /**
   * Copy green.
   */
  CopyGreen: 15,
  /**
   * Copy magenta.
   */
  CopyMagenta: 16,
  /**
   * Copy alpha.
   */
  CopyAlpha: 17,
  /**
   * Copy red.
   */
  CopyRed: 18,
  /**
   * Copy yellow.
   */
  CopyYellow: 19,
  /**
   * Darken.
   */
  Darken: 20,
  /**
   * Darken intensity.
   */
  DarkenIntensity: 21,
  /**
   * Difference.
   */
  Difference: 22,
  /**
   * Displace.
   */
  Displace: 23,
  /**
   * Dissolve.
   */
  Dissolve: 24,
  /**
   * Distort.
   */
  Distort: 25,
  /**
   * Divide dst.
   */
  DivideDst: 26,
  /**
   * Divide src.
   */
  DivideSrc: 27,
  /**
   * Dst atop.
   */
  DstAtop: 28,
  /**
   * Dst.
   */
  Dst: 29,
  /**
   * Dst in.
   */
  DstIn: 30,
  /**
   * Dst out.
   */
  DstOut: 31,
  /**
   * Dst over.
   */
  DstOver: 32,
  /**
   * Exclusion.
   */
  Exclusion: 33,
  /**
   * Hard light.
   */
  HardLight: 34,
  /**
   * Hard mix.
   */
  HardMix: 35,
  /**
   * Hue.
   */
  Hue: 36,
  /**
   * In.
   */
  In: 37,
  /**
   * Intensity.
   */
  Intensity: 38,
  /**
   * Lighten.
   */
  Lighten: 39,
  /**
   * Lighten intensity.
   */
  LightenIntensity: 40,
  /**
   * Linear burn.
   */
  LinearBurn: 41,
  /**
   * Linear dodge.
   */
  LinearDodge: 42,
  /**
   * Linear light.
   */
  LinearLight: 43,
  /**
   * Luminize.
   */
  Luminize: 44,
  /**
   * Mathematics.
   */
  Mathematics: 45,
  /**
   * Minus dst.
   */
  MinusDst: 46,
  /**
   * Minus src.
   */
  MinusSrc: 47,
  /**
   * Modulate.
   */
  Modulate: 48,
  /**
   * Modulus add.
   */
  ModulusAdd: 49,
  /**
   * Modulus subtract.
   */
  ModulusSubtract: 50,
  /**
   * Multiply.
   */
  Multiply: 51,
  /**
   * No.
   */
  No: 52,
  /**
   * Out.
   */
  Out: 53,
  /**
   * Over.
   */
  Over: 54,
  /**
   * Overlay.
   */
  Overlay: 55,
  /**
   * Pegtop light.
   */
  PegtopLight: 56,
  /**
   * Pin light.
   */
  PinLight: 57,
  /**
   * Plus.
   */
  Plus: 58,
  /**
   * Replace.
   */
  Replace: 59,
  /**
   * Saturate.
   */
  Saturate: 60,
  /**
   * Screen.
   */
  Screen: 61,
  /**
   * Soft light.
   */
  SoftLight: 62,
  /**
   * Src atop.
   */
  SrcAtop: 63,
  /**
   * Src.
   */
  Src: 64,
  /**
   * Src in.
   */
  SrcIn: 65,
  /**
   * Src out.
   */
  SrcOut: 66,
  /**
   * Src over.
   */
  SrcOver: 67,
  /**
   * Threshold.
   */
  Threshold: 68,
  /**
   * Vivid light.
   */
  VividLight: 69,
  /**
   * Xor.
   */
  Xor: 70,
  /**
   * Stereo.
   */
  Stereo: 71,
  /**
   * Freeze.
   */
  Freeze: 72,
  /**
   * Interpolate.
   */
  Interpolate: 73,
  /**
   * Negate.
   */
  Negate: 74,
  /**
   * Reflect.
   */
  Reflect: 75,
  /**
   * Soft burn.
   */
  SoftBurn: 76,
  /**
   * Soft dodge.
   */
  SoftDodge: 77,
  /**
   * Stamp.
   */
  Stamp: 78,
  /**
   * Root-mean-square error.
   */
  RMSE: 79,
  /**
   * Saliency blend.
   */
  SaliencyBlend: 80,
  /**
   * Seamless blend.
   */
  SeamlessBlend: 81
}, ii = {
  /**
   * Warning.
   */
  Warning: 300,
  /**
   * Resource limit warning.
   */
  ResourceLimitWarning: 300,
  /**
   * Type warning.
   */
  TypeWarning: 305,
  /**
   * Option warning.
   */
  OptionWarning: 310,
  /**
   * Delegate warning.
   */
  DelegateWarning: 315,
  /**
   * Missing delegate warning.
   */
  MissingDelegateWarning: 320,
  /**
   * Corrupt image warning.
   */
  CorruptImageWarning: 325,
  /**
   * File open warning.
   */
  FileOpenWarning: 330,
  /**
   * Blob warning.
   */
  BlobWarning: 335,
  /**
   * Stream warning.
   */
  StreamWarning: 340,
  /**
   * Cache warning.
   */
  CacheWarning: 345,
  /**
   * Coder warning.
   */
  CoderWarning: 350,
  /**
   * Filter warning.
   */
  FilterWarning: 352,
  /**
   * Module warning.
   */
  ModuleWarning: 355,
  /**
   * Draw warning.
   */
  DrawWarning: 360,
  /**
   * Image warning.
   */
  ImageWarning: 365,
  /**
   * Wand warning.
   */
  WandWarning: 370,
  /**
   * Random warning.
   */
  RandomWarning: 375,
  /**
   * X server warning.
   */
  XServerWarning: 380,
  /**
   * Monitor warning.
   */
  MonitorWarning: 385,
  /**
   * Registry warning.
   */
  RegistryWarning: 390,
  /**
   * Configure warning.
   */
  ConfigureWarning: 395,
  /**
   * Policy warning.
   */
  PolicyWarning: 399,
  /**
   * Error.
   */
  Error: 400,
  /**
   * Resource limit error.
   */
  ResourceLimitError: 400,
  /**
   * Type error.
   */
  TypeError: 405,
  /**
   * Option error.
   */
  OptionError: 410,
  /**
   * Delegate error.
   */
  DelegateError: 415,
  /**
   * Missing delegate error.
   */
  MissingDelegateError: 420,
  /**
   * Corrupt image error.
   */
  CorruptImageError: 425,
  /**
   * File open error.
   */
  FileOpenError: 430,
  /**
   * Blob error.
   */
  BlobError: 435,
  /**
   * Stream error.
   */
  StreamError: 440,
  /**
   * Cache error.
   */
  CacheError: 445,
  /**
   * Coder error.
   */
  CoderError: 450,
  /**
   * Filter error.
   */
  FilterError: 452,
  /**
   * Module error.
   */
  ModuleError: 455,
  /**
   * Draw error.
   */
  DrawError: 460,
  /**
   * Image error.
   */
  ImageError: 465,
  /**
   * Wand error.
   */
  WandError: 470,
  /**
   * Random error.
   */
  RandomError: 475,
  /**
   * X server error.
   */
  XServerError: 480,
  /**
   * Monitor error.
   */
  MonitorError: 485,
  /**
   * Registry error.
   */
  RegistryError: 490,
  /**
   * Configure error.
   */
  ConfigureError: 495,
  /**
   * Policy error.
   */
  PolicyError: 499
};
class U extends Error {
  _relatedErrors = [];
  /** @internal */
  constructor(a, s = ii.Error) {
    super(a), this.severity = s;
  }
  /**
   * Gets the severity of an exception.
   */
  severity;
  /**
   * Gets the exceptions that are related to this exception.
   */
  get relatedErrors() {
    return this._relatedErrors;
  }
  /** @internal */
  _setRelatedErrors(a) {
    this._relatedErrors = a;
  }
}
class $e {
  /**
   * Gets the quantum depth.
   */
  static get depth() {
    return l._api._Quantum_Depth_Get();
  }
  /**
   * Gets the maximum value of the quantum.
   */
  static get max() {
    return l._api._Quantum_Max_Get();
  }
}
function he(S, a) {
  return S === 0 ? a ?? null : l._api.UTF8ToString(S);
}
function co(S, a) {
  const s = he(a);
  return S._MagickMemory_Relinquish(a), s;
}
function ri(S, a, s) {
  const i = S.lengthBytesUTF8(a) + 1, g = S._malloc(i);
  try {
    return S.stringToUTF8(a, g, i), s(g);
  } finally {
    S._free(g);
  }
}
function b(S, a) {
  return S === null ? a(0) : ri(l._api, S, a);
}
class k {
  constructor(a, s, i, g, m) {
    if (a !== void 0)
      if (typeof a == "string") {
        let p = 0;
        try {
          p = l._api._MagickColor_Create(), b(a, (M) => {
            if (l._api._MagickColor_Initialize(p, M) === 0)
              throw new U("invalid color specified");
            this.initialize(p);
          });
        } finally {
          l._api._free(p);
        }
      } else
        this.r = a, this.g = s ?? 0, this.b = i ?? 0, m === void 0 ? this.a = g ?? $e.max : (this.k = g ?? 0, this.a = m, this.isCmyk = !0);
  }
  r = 0;
  g = 0;
  b = 0;
  a = 0;
  k = 0;
  isCmyk = !1;
  /** @internal */
  static _create(a) {
    const s = new k();
    return s.initialize(a), s;
  }
  toShortString() {
    return this.a !== $e.max ? this.toString() : this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}`;
  }
  toString() {
    return this.isCmyk ? `cmyka(${this.r},${this.g},${this.b},${this.k},${(this.a / $e.max).toFixed(4)})` : `#${this.toHex(this.r)}${this.toHex(this.g)}${this.toHex(this.b)}${this.toHex(this.a)}`;
  }
  /** @internal */
  _use(a) {
    let s = 0;
    try {
      s = l._api._MagickColor_Create(), l._api._MagickColor_Red_Set(s, this.r), l._api._MagickColor_Green_Set(s, this.g), l._api._MagickColor_Blue_Set(s, this.b), l._api._MagickColor_Alpha_Set(s, this.a), l._api._MagickColor_IsCMYK_Set(s, this.isCmyk ? 1 : 0), a(s);
    } finally {
      l._api._free(s);
    }
  }
  initialize(a) {
    this.r = l._api._MagickColor_Red_Get(a), this.g = l._api._MagickColor_Green_Get(a), this.b = l._api._MagickColor_Blue_Get(a), this.a = l._api._MagickColor_Alpha_Get(a), this.isCmyk = l._api._MagickColor_IsCMYK_Get(a) === 1;
  }
  toHex(a) {
    return a.toString(16).padStart(2, "0");
  }
}
var ye = /* @__PURE__ */ ((S) => (S[S.NoValue = 0] = "NoValue", S[S.PercentValue = 4096] = "PercentValue", S[S.IgnoreAspectRatio = 8192] = "IgnoreAspectRatio", S[S.Less = 16384] = "Less", S[S.Greater = 32768] = "Greater", S[S.FillArea = 65536] = "FillArea", S[S.LimitPixels = 131072] = "LimitPixels", S[S.AspectRatio = 1048576] = "AspectRatio", S))(ye || {});
class _e {
  _includeXyInToString;
  _width = 0;
  _height = 0;
  _x = 0;
  _y = 0;
  _aspectRatio = !1;
  _fillArea = !1;
  _greater = !1;
  _isPercentage = !1;
  _ignoreAspectRatio = !1;
  _less = !1;
  _limitPixels = !1;
  constructor(a, s, i, g) {
    if (typeof a == "number") {
      if (i !== void 0 && g !== void 0 ? (this._width = i, this._height = g, this._x = a, this._y = s ?? 0, this._includeXyInToString = !0) : (this._width = a, this._height = s ?? this._width, this._x = 0, this._y = 0, this._includeXyInToString = !1), this._width < 0)
        throw new U("negative width is not allowed");
      if (this._height < 0)
        throw new U("negative height is not allowed");
    } else {
      this._includeXyInToString = a.indexOf("+") >= 0 || a.indexOf("-") >= 0;
      const m = l._api._MagickGeometry_Create();
      try {
        b(a, (p) => {
          const M = l._api._MagickGeometry_Initialize(m, p);
          if (M === ye.NoValue)
            throw new U("invalid geometry specified");
          this.hasFlag(M, ye.AspectRatio) ? this.initializeFromAspectRation(m, a) : this.initialize(m, M);
        });
      } finally {
        l._api._MagickGeometry_Dispose(m);
      }
    }
  }
  get aspectRatio() {
    return this._aspectRatio;
  }
  get fillArea() {
    return this._fillArea;
  }
  set fillArea(a) {
    this._fillArea = a;
  }
  get greater() {
    return this._greater;
  }
  set greater(a) {
    this._greater = a;
  }
  get height() {
    return this._height;
  }
  set height(a) {
    this._height = a;
  }
  get ignoreAspectRatio() {
    return this._ignoreAspectRatio;
  }
  set ignoreAspectRatio(a) {
    this._ignoreAspectRatio = a;
  }
  get isPercentage() {
    return this._isPercentage;
  }
  set isPercentage(a) {
    this._isPercentage = a;
  }
  get less() {
    return this._less;
  }
  set less(a) {
    this._less = a;
  }
  get limitPixels() {
    return this._limitPixels;
  }
  set limitPixels(a) {
    this._limitPixels = a;
  }
  get width() {
    return this._width;
  }
  set width(a) {
    this._width = a;
  }
  get x() {
    return this._x;
  }
  set x(a) {
    this._x = a;
  }
  get y() {
    return this._y;
  }
  set y(a) {
    this._y = a;
  }
  toString() {
    if (this._aspectRatio)
      return this._width + ":" + this._height;
    let a = "";
    return this._width == 0 && this._height == 0 ? a += "0x0" : (this._width > 0 && (a += this._width.toString()), this._height > 0 ? a += "x" + this._height.toString() : a += "x"), (this._x != 0 || this._y != 0 || this._includeXyInToString) && (this._x >= 0 && (a += "+"), a += this._x, this.y >= 0 && (a += "+"), a += this.y), this._fillArea && (a += "^"), this._greater && (a += ">"), this._isPercentage && (a += "%"), this._ignoreAspectRatio && (a += "!"), this._less && (a += "<"), this._limitPixels && (a += "@"), a;
  }
  /** @internal */
  static _fromRectangle(a) {
    if (a === 0)
      throw new U("unable to allocate memory");
    try {
      const s = l._api._MagickRectangle_Width_Get(a), i = l._api._MagickRectangle_Height_Get(a), g = l._api._MagickRectangle_X_Get(a), m = l._api._MagickRectangle_Y_Get(a);
      return new _e(g, m, s, i);
    } finally {
      l._api._MagickRectangle_Dispose(a);
    }
  }
  /** @internal */
  _toRectangle(a) {
    const s = l._api._MagickRectangle_Create();
    if (s === 0)
      throw new U("unable to allocate memory");
    try {
      l._api._MagickRectangle_Width_Set(s, this._width), l._api._MagickRectangle_Height_Set(s, this._height), l._api._MagickRectangle_X_Set(s, this._x), l._api._MagickRectangle_Y_Set(s, this._y), a(s);
    } finally {
      l._api._MagickRectangle_Dispose(s);
    }
  }
  initialize(a, s) {
    this._width = l._api._MagickGeometry_Width_Get(a), this._height = l._api._MagickGeometry_Height_Get(a), this._x = l._api._MagickGeometry_X_Get(a), this._y = l._api._MagickGeometry_Y_Get(a), this._ignoreAspectRatio = this.hasFlag(s, ye.IgnoreAspectRatio), this._isPercentage = this.hasFlag(s, ye.PercentValue), this._fillArea = this.hasFlag(s, ye.FillArea), this._greater = this.hasFlag(s, ye.Greater), this._less = this.hasFlag(s, ye.Less), this._limitPixels = this.hasFlag(s, ye.LimitPixels);
  }
  initializeFromAspectRation(a, s) {
    this._aspectRatio = !0;
    const i = s.split(":");
    this._width = this.parseNumber(i[0]), this._height = this.parseNumber(i[1]), this._x = l._api._MagickGeometry_X_Get(a), this._y = l._api._MagickGeometry_Y_Get(a);
  }
  parseNumber(a) {
    let s = 0;
    for (; s < a.length && !this.isNumber(a[s]); )
      s++;
    const i = s;
    for (; s < a.length && this.isNumber(a[s]); )
      s++;
    return parseInt(a.substr(i, s - i));
  }
  isNumber(a) {
    return a >= "0" && a <= "9";
  }
  hasFlag(a, s) {
    return (a & s) === s;
  }
}
class De {
  constructor(a, s) {
    this.x = a, this.y = s ?? a;
  }
  /**
   * Gets the x-coordinate of this point.
   */
  x;
  /**
   * Gets the y-coordinate of this point.
   */
  y;
  /** @internal */
  static _create(a) {
    return a === 0 ? new De(0, 0) : new De(l._api._PointInfo_X_Get(a), l._api._PointInfo_Y_Get(a));
  }
}
class _i {
  constructor(a) {
    this.area = l._api._ConnectedComponent_GetArea(a), this.centroid = De._create(l._api._ConnectedComponent_GetCentroid(a)), this.color = k._create(l._api._ConnectedComponent_GetColor(a)), this.height = l._api._ConnectedComponent_GetHeight(a), this.id = l._api._ConnectedComponent_GetId(a), this.width = l._api._ConnectedComponent_GetWidth(a), this.x = l._api._ConnectedComponent_GetX(a), this.y = l._api._ConnectedComponent_GetY(a);
  }
  /**
   * The pixel count of the area.
   */
  area;
  /**
   * The centroid of the area.
   */
  centroid;
  /**
   * The color of the area.
   */
  color;
  /**
   * The height of the area.
   */
  height;
  /**
   * The id of the area.
   */
  id;
  /**
   * The width of the area.
   */
  width;
  /**
   * The X offset from origin.
   */
  x;
  /**
   * The Y offset from origin.
   */
  y;
  /** @internal */
  static _create(a, s) {
    const i = [];
    if (a === 0)
      return i;
    for (let g = 0; g < s; g++) {
      const m = l._api._ConnectedComponent_GetInstance(a, g);
      m === 0 || l._api._ConnectedComponent_GetArea(m) < Number.EPSILON || i.push(new _i(m));
    }
    return i;
  }
  /**
   * Returns the geometry of the area of the connected component.
   */
  toGeometry() {
    return new _e(this.x, this.y, this.width, this.height);
  }
}
class lo {
  /**
   * The threshold that merges any object not within the min and max angle
   * threshold.
   **/
  angleThreshold;
  /**
   * The threshold that eliminates small objects by merging them with their
   * larger neighbors.
   */
  areaThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * circularity threshold.
   */
  circularityThreshold;
  /**
   * The number of neighbors to visit (4 or 8).
   */
  connectivity;
  /**
   * The threshold that merges any object not within the min and max diameter
   * threshold.
   */
  diameterThreshold;
  /**
   * The threshold that merges any object not within the min and max
   * eccentricity threshold.
   */
  eccentricityThreshold;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * major threshold.
   */
  majorAxisThreshold;
  /**
   * Whether the object color in the component labeled image will be replaced
   * with the mean color from the source image (defaults to grayscale).
   */
  meanColor;
  /**
   * The threshold that merges any object not within the min and max ellipse
   * minor threshold.
   */
  minorAxisThreshold;
  /**
   * The threshold that merges any object not within the min and max perimeter
   * threshold.
   */
  perimeterThreshold;
  constructor(a) {
    this.connectivity = a;
  }
  /** @internal */
  _setArtifacts(a) {
    this.angleThreshold !== void 0 && a.setArtifact("connected-components:angle-threshold", this.angleThreshold.toString()), this.areaThreshold !== void 0 && a.setArtifact("connected-components:area-threshold", this.areaThreshold.toString()), this.circularityThreshold !== void 0 && a.setArtifact("connected-components:circularity-threshold", this.circularityThreshold.toString()), this.diameterThreshold !== void 0 && a.setArtifact("connected-components:diameter-threshold", this.diameterThreshold.toString()), this.eccentricityThreshold !== void 0 && a.setArtifact("connected-components:eccentricity-threshold", this.eccentricityThreshold.toString()), this.majorAxisThreshold !== void 0 && a.setArtifact("connected-components:major-axis-threshold", this.majorAxisThreshold.toString()), this.meanColor !== void 0 && a.setArtifact("connected-components:mean-color", this.meanColor.toString()), this.minorAxisThreshold !== void 0 && a.setArtifact("connected-components:minor-axis-threshold", this.minorAxisThreshold.toString()), this.perimeterThreshold !== void 0 && a.setArtifact("connected-components:perimeter-threshold", this.perimeterThreshold.toString());
  }
}
const Ne = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Pixels per inch.
   */
  PixelsPerInch: 1,
  /**
   * Pixels per centimeter.
   */
  PixelsPerCentimeter: 2
};
class tt {
  constructor(a, s, i) {
    s === void 0 ? (this.x = a, this.y = a, this.units = Ne.PixelsPerInch) : i !== void 0 ? (this.x = a, this.y = s, this.units = i) : (this.x = a, this.y = a, this.units = s);
  }
  /**
   * Gets the x resolution.
   */
  x;
  /**
   * Gets the y resolution.
   */
  y;
  /**
   * Gets the units.
   */
  units;
  /**
   * Returns a string that represents the current {@link Density} object.
   */
  toString(a) {
    return a == this.units || a === Ne.Undefined || a === void 0 ? tt.toString(this.x, this.y, a ?? Ne.Undefined) : this.units == Ne.PixelsPerCentimeter && a == Ne.PixelsPerInch ? tt.toString(this.x * 2.54, this.y * 2.54, a) : tt.toString(this.x / 2.54, this.y / 2.54, a);
  }
  static toString(a, s, i) {
    let g = `${a}x${s}`;
    switch (i) {
      case Ne.PixelsPerCentimeter:
        g += "cm";
        break;
      case Ne.PixelsPerInch:
        g += "inch";
        break;
    }
    return g;
  }
}
class ce {
  static _disposeAfterExecution(a, s) {
    try {
      const i = s(a);
      return i instanceof Promise ? Promise.resolve(i).then((g) => (a.dispose(), ce.checkResult(a, g), g)) : (a.dispose(), ce.checkResult(a, i), i);
    } catch (i) {
      throw a.dispose(), i;
    }
  }
  static checkResult(a, s) {
    if (s === a)
      throw new U("The result of the function cannot be the instance that has been disposed.");
    return s;
  }
}
class pr {
  _pointer;
  _bytes;
  _func;
  constructor(a, s, i) {
    this._pointer = a, this._func = i, this._bytes = l._api.HEAPU8.subarray(a, a + s);
  }
  func(a) {
    return a._bytes === void 0 ? a._func(new Uint8Array()) : a._func(a._bytes);
  }
  dispose() {
    this._pointer = l._api._MagickMemory_Relinquish(this._pointer);
  }
}
class Ue {
  disposeMethod;
  instance;
  /** @internal */
  constructor(a, s) {
    this.instance = a, this.disposeMethod = s;
  }
  /** @internal */
  get _instance() {
    if (this.instance > 0)
      return this.instance;
    throw this.instance === -1 && this._instanceNotInitialized(), new U("instance is disposed");
  }
  /** @internal */
  set _instance(a) {
    this.disposeInstance(this.instance), this.instance = a;
  }
  dispose() {
    this.instance = this.disposeInstance(this.instance);
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new U("instance is not initialized");
  }
  /** @internal */
  _setInstance(a, s) {
    return s.check(() => this.instance === 0 ? !1 : (this.dispose(), this.instance = a, !0), () => (this.disposeInstance(a), !0));
  }
  disposeInstance(a) {
    return a > 0 && (this.onDispose !== void 0 && this.onDispose(), this.disposeMethod(a)), 0;
  }
}
class go extends Ue {
  constructor(a) {
    const s = l._api._DrawingSettings_Create(), i = l._api._DrawingSettings_Dispose;
    if (super(s, i), a.fillColor !== void 0 && a.fillColor._use((g) => {
      l._api._DrawingSettings_FillColor_Set(this._instance, g);
    }), a.font !== void 0) {
      const g = Te._getFontFileName(a.font);
      b(g, (m) => {
        l._api._DrawingSettings_Font_Set(this._instance, m);
      });
    }
    a.fontPointsize !== void 0 && l._api._DrawingSettings_FontPointsize_Set(this._instance, a.fontPointsize), a.strokeColor !== void 0 && a.strokeColor._use((g) => {
      l._api._DrawingSettings_StrokeColor_Set(this._instance, g);
    }), a.strokeWidth !== void 0 && l._api._DrawingSettings_StrokeWidth_Set(this._instance, a.strokeWidth);
  }
}
class Tt {
  backgroundColor;
  fillColor;
  font;
  fontPointsize;
  strokeColor;
  strokeWidth;
  static _create(a) {
    const s = new Tt();
    return s.fillColor = a.fillColor, s.font = a.font, s.fontPointsize = a.fontPointsize, s.strokeColor = a.strokeColor, s.strokeWidth = a.strokeWidth, s;
  }
  _use(a) {
    const s = new go(this);
    return ce._disposeAfterExecution(s, a);
  }
}
class fr {
  instance;
  type;
  constructor(a, s) {
    this.instance = l._api._malloc(a), this.type = s, l._api.setValue(this.instance, 0, this.type);
  }
  get ptr() {
    return this.instance;
  }
  get value() {
    return l._api.getValue(this.instance, this.type);
  }
}
class Ge extends fr {
  constructor() {
    super(4, "i32");
  }
  static use(a) {
    const s = new Ge();
    try {
      return a(s);
    } finally {
      l._api._free(s.ptr);
    }
  }
}
class T {
  pointer;
  constructor(a) {
    this.pointer = a;
  }
  get ptr() {
    return this.pointer.ptr;
  }
  check(a, s) {
    return this.isError() ? s() : a();
  }
  static usePointer(a, s) {
    return Ge.use((i) => {
      const g = a(i.ptr);
      return T.checkException(i, g, s);
    });
  }
  static use(a, s) {
    return Ge.use((i) => {
      const g = a(new T(i));
      return T.checkException(i, g, s);
    });
  }
  static checkException(a, s, i) {
    if (!T.isRaised(a))
      return s;
    const g = T.getErrorSeverity(a.value);
    if (g >= ii.Error)
      T.throw(a, g);
    else if (i !== void 0) {
      const m = T.createError(a.value, g);
      i(m);
    } else
      T.dispose(a);
    return s;
  }
  isError() {
    return T.isRaised(this.pointer) ? T.getErrorSeverity(this.pointer.value) >= ii.Error : !1;
  }
  static getErrorSeverity(a) {
    return l._api._MagickExceptionHelper_Severity(a);
  }
  static isRaised(a) {
    return a.value !== 0;
  }
  static throw(a, s) {
    const i = T.createError(a.value, s);
    throw T.dispose(a), i;
  }
  static createError(a, s) {
    const i = T.getMessage(a), g = new U(i, s), m = l._api._MagickExceptionHelper_RelatedCount(a);
    if (m === 0)
      return g;
    const p = [];
    for (let M = 0; M < m; M++) {
      const I = l._api._MagickExceptionHelper_Related(a, M), R = T.getErrorSeverity(I), B = T.createError(I, R);
      p.push(B);
    }
    return g._setRelatedErrors(p), g;
  }
  static getMessage(a) {
    const s = l._api._MagickExceptionHelper_Message(a), i = l._api._MagickExceptionHelper_Description(a);
    let g = he(s, "Unknown error");
    return i !== 0 && (g += `(${l._api.UTF8ToString(i)})`), g;
  }
  static dispose(a) {
    l._api._MagickExceptionHelper_Dispose(a.value);
  }
}
class ci {
  constructor(a, s, i, g, m, p, M) {
    this.ascent = a, this.descent = s, this.maxHorizontalAdvance = i, this.textHeight = g, this.textWidth = m, this.underlinePosition = p, this.underlineThickness = M;
  }
  /**
   * Gets the ascent, the distance in pixels from the text baseline to the highest/upper grid coordinate
   * used to place an outline point.
   */
  ascent;
  /**
   * Gets the descent, the distance in pixels from the baseline to the lowest grid coordinate used to
   * place an outline point. Always a negative value.
   */
  descent;
  /**
   * Gets the maximum horizontal advance in pixels.
   */
  maxHorizontalAdvance;
  /**
   * Gets the text height in pixels.
   */
  textHeight;
  /**
   * Gets the text width in pixels.
   */
  textWidth;
  /**
   * Gets the underline position.
   */
  underlinePosition;
  /**
   * Gets the underline thickness.
   */
  underlineThickness;
  /** @internal */
  static _create(a) {
    if (a == 0)
      return null;
    try {
      const s = l._api._TypeMetric_Ascent_Get(a), i = l._api._TypeMetric_Descent_Get(a), g = l._api._TypeMetric_MaxHorizontalAdvance_Get(a), m = l._api._TypeMetric_TextHeight_Get(a), p = l._api._TypeMetric_TextWidth_Get(a), M = l._api._TypeMetric_UnderlinePosition_Get(a), I = l._api._TypeMetric_UnderlineThickness_Get(a);
      return new ci(s, i, g, m, p, M, I);
    } finally {
      l._api._TypeMetric_Dispose(a);
    }
  }
}
class Gt extends Ue {
  constructor(a, s) {
    const g = Tt._create(s)._use((p) => l._api._DrawingWand_Create(a._instance, p._instance)), m = l._api._DrawingWand_Dispose;
    super(g, m);
  }
  color(a, s, i) {
    T.usePointer((g) => {
      l._api._DrawingWand_Color(this._instance, a, s, i, g);
    });
  }
  draw(a) {
    a.forEach((s) => {
      s.draw(this);
    }), T.usePointer((s) => {
      l._api._DrawingWand_Render(this._instance, s);
    });
  }
  fillColor(a) {
    T.usePointer((s) => {
      a._use((i) => {
        l._api._DrawingWand_FillColor(this._instance, i, s);
      });
    });
  }
  fillOpacity(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_FillOpacity(this._instance, a, s);
    });
  }
  font(a) {
    T.usePointer((s) => {
      b(a, (i) => {
        l._api._DrawingWand_Font(this._instance, i, s);
      });
    });
  }
  fontPointSize(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_FontPointSize(this._instance, a, s);
    });
  }
  /** @internal */
  fontTypeMetrics(a, s) {
    return T.usePointer((i) => b(a, (g) => {
      const m = l._api._DrawingWand_FontTypeMetrics(this._instance, g, s ? 1 : 0, i);
      return ci._create(m);
    }));
  }
  gravity(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_Gravity(this._instance, a, s);
    });
  }
  line(a, s, i, g) {
    T.usePointer((m) => {
      l._api._DrawingWand_Line(this._instance, a, s, i, g, m);
    });
  }
  point(a, s) {
    T.usePointer((i) => {
      l._api._DrawingWand_Point(this._instance, a, s, i);
    });
  }
  rectangle(a, s, i, g) {
    T.usePointer((m) => {
      l._api._DrawingWand_Rectangle(this._instance, a, s, i, g, m);
    });
  }
  roundRectangle(a, s, i, g, m, p) {
    T.usePointer((M) => {
      l._api._DrawingWand_RoundRectangle(this._instance, a, s, i, g, m, p, M);
    });
  }
  strokeColor(a) {
    T.usePointer((s) => {
      a._use((i) => {
        l._api._DrawingWand_StrokeColor(this._instance, i, s);
      });
    });
  }
  strokeWidth(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_StrokeWidth(this._instance, a, s);
    });
  }
  text(a, s, i) {
    T.usePointer((g) => {
      b(i, (m) => {
        l._api._DrawingWand_Text(this._instance, a, s, m, g);
      });
    });
  }
  textAlignment(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextAlignment(this._instance, a, s);
    });
  }
  textAntialias(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextAntialias(this._instance, a ? 1 : 0, s);
    });
  }
  textDecoration(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextDecoration(this._instance, a, s);
    });
  }
  textInterlineSpacing(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextInterlineSpacing(this._instance, a, s);
    });
  }
  textInterwordspacing(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextInterwordSpacing(this._instance, a, s);
    });
  }
  textKerning(a) {
    T.usePointer((s) => {
      l._api._DrawingWand_TextKerning(this._instance, a, s);
    });
  }
  textUnderColor(a) {
    T.usePointer((s) => {
      a._use((i) => {
        l._api._DrawingWand_TextUnderColor(this._instance, i, s);
      });
    });
  }
  /** @internal */
  static _use(a, s) {
    const i = new Gt(a, a.settings);
    return ce._disposeAfterExecution(i, s);
  }
}
class li extends fr {
  constructor() {
    super(8, "double");
  }
  static use(a) {
    const s = new li();
    try {
      return a(s);
    } finally {
      l._api._free(s.ptr);
    }
  }
}
const de = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Forget.
   */
  Forget: 0,
  /**
   * Northwest
   */
  Northwest: 1,
  /**
   * North
   */
  North: 2,
  /**
   * Northeast
   */
  Northeast: 3,
  /**
   * West
   */
  West: 4,
  /**
   * Center
   */
  Center: 5,
  /**
   * East
   */
  East: 6,
  /**
   * Southwest
   */
  Southwest: 7,
  /**
   * South
   */
  South: 8,
  /**
   * Southeast
   */
  Southeast: 9
};
function* uo(S) {
  for (const a of S)
    switch (a) {
      case de.North:
        yield "north";
        break;
      case de.Northeast:
        yield "north", yield "east";
        break;
      case de.Northwest:
        yield "north", yield "west";
        break;
      case de.East:
        yield "east";
        break;
      case de.West:
        yield "west";
        break;
      case de.South:
        yield "south";
        break;
      case de.Southeast:
        yield "south", yield "east";
        break;
      case de.Southwest:
        yield "south", yield "west";
    }
}
class bt {
  constructor(a, s, i) {
    this.meanErrorPerPixel = a, this.normalizedMeanError = s, this.normalizedMaximumError = i;
  }
  /**
   * Gets the mean error per pixel computed when an image is color reduced.
   */
  meanErrorPerPixel;
  /**
   * Gets the normalized maximum error per pixel computed when an image is color reduced.
   */
  normalizedMaximumError;
  /**
   * Gets the normalized mean error per pixel computed when an image is color reduced.
   */
  normalizedMeanError;
  /** @internal */
  static _create(a) {
    const s = l._api._MagickImage_MeanErrorPerPixel_Get(a._instance), i = l._api._MagickImage_NormalizedMeanError_Get(a._instance), g = l._api._MagickImage_NormalizedMaximumError_Get(a._instance);
    return new bt(s, i, g);
  }
}
const Re = {
  /**
   * Unknown.
   */
  Unknown: "UNKNOWN",
  /**
   * Hasselblad CFV/H3D39II Raw Format.
   */
  ThreeFr: "3FR",
  /**
   * Media Container.
   */
  ThreeG2: "3G2",
  /**
   * Media Container.
   */
  ThreeGp: "3GP",
  /**
   * Raw alpha samples.
   */
  A: "A",
  /**
   * AAI Dune image.
   */
  Aai: "AAI",
  /**
   * Adobe Illustrator CS2.
   */
  Ai: "AI",
  /**
   * Animated Portable Network Graphics.
   */
  APng: "APNG",
  /**
   * PFS: 1st Publisher Clip Art.
   */
  Art: "ART",
  /**
   * Sony Alpha Raw Format.
   */
  Arw: "ARW",
  /**
   * Image sequence laid out in continuous irregular courses (Unknown).
   */
  Ashlar: "ASHLAR",
  /**
   * AVC Image File Format.
   */
  Avci: "AVCI",
  /**
   * Microsoft Audio/Visual Interleaved.
   */
  Avi: "AVI",
  /**
   * AV1 Image File Format (Heic).
   */
  Avif: "AVIF",
  /**
   * AVS X image.
   */
  Avs: "AVS",
  /**
   * Raw blue samples.
   */
  B: "B",
  /**
   * Raw mosaiced samples.
   */
  Bayer: "BAYER",
  /**
   * Raw mosaiced and alpha samples.
   */
  Bayera: "BAYERA",
  /**
   * Raw blue, green, and red samples.
   */
  Bgr: "BGR",
  /**
   * Raw blue, green, red, and alpha samples.
   */
  Bgra: "BGRA",
  /**
   * Raw blue, green, red, and opacity samples.
   */
  Bgro: "BGRO",
  /**
   * Microsoft Windows bitmap image.
   */
  Bmp: "BMP",
  /**
   * Microsoft Windows bitmap image (V2).
   */
  Bmp2: "BMP2",
  /**
   * Microsoft Windows bitmap image (V3).
   */
  Bmp3: "BMP3",
  /**
   * BRF ASCII Braille format.
   */
  Brf: "BRF",
  /**
   * Raw cyan samples.
   */
  C: "C",
  /**
   * Continuous Acquisition and Life-cycle Support Type 1.
   */
  Cal: "CAL",
  /**
   * Continuous Acquisition and Life-cycle Support Type 1.
   */
  Cals: "CALS",
  /**
   * Constant image uniform color.
   */
  Canvas: "CANVAS",
  /**
   * Caption.
   */
  Caption: "CAPTION",
  /**
   * Cineon Image File.
   */
  Cin: "CIN",
  /**
   * Cisco IP phone image format.
   */
  Cip: "CIP",
  /**
   * Image Clip Mask.
   */
  Clip: "CLIP",
  /**
   * Raw cyan, magenta, yellow, and black samples.
   */
  Cmyk: "CMYK",
  /**
   * Raw cyan, magenta, yellow, black, and alpha samples.
   */
  Cmyka: "CMYKA",
  /**
   * Canon Digital Camera Raw Format.
   */
  Cr2: "CR2",
  /**
   * Canon Digital Camera Raw Format.
   */
  Cr3: "CR3",
  /**
   * Canon Digital Camera Raw Format.
   */
  Crw: "CRW",
  /**
   * Cube color lookup table image.
   */
  Cube: "CUBE",
  /**
   * Microsoft icon.
   */
  Cur: "CUR",
  /**
   * DR Halo.
   */
  Cut: "CUT",
  /**
   * Base64-encoded inline images.
   */
  Data: "DATA",
  /**
   * Digital Imaging and Communications in Medicine image.
   */
  Dcm: "DCM",
  /**
   * Kodak Digital Camera Raw Format.
   */
  Dcr: "DCR",
  /**
   * Raw Photo Decoder (dcraw).
   */
  Dcraw: "DCRAW",
  /**
   * ZSoft IBM PC multi-page Paintbrush.
   */
  Dcx: "DCX",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dds: "DDS",
  /**
   * Multi-face font package.
   */
  Dfont: "DFONT",
  /**
   * Digital Negative Raw Format.
   */
  Dng: "DNG",
  /**
   * SMPTE 268M-2003 (DPX 2.0).
   */
  Dpx: "DPX",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dxt1: "DXT1",
  /**
   * Microsoft DirectDraw Surface.
   */
  Dxt5: "DXT5",
  /**
   * Encapsulated Portable Document Format.
   */
  Epdf: "EPDF",
  /**
   * Encapsulated PostScript Interchange format.
   */
  Epi: "EPI",
  /**
   * Encapsulated PostScript.
   */
  Eps: "EPS",
  /**
   * Level II Encapsulated PostScript.
   */
  Eps2: "EPS2",
  /**
   * Level III Encapsulated PostScript.
   */
  Eps3: "EPS3",
  /**
   * Encapsulated PostScript.
   */
  Epsf: "EPSF",
  /**
   * Encapsulated PostScript Interchange format.
   */
  Epsi: "EPSI",
  /**
   * Encapsulated PostScript with TIFF preview.
   */
  Ept: "EPT",
  /**
   * Encapsulated PostScript Level II with TIFF preview.
   */
  Ept2: "EPT2",
  /**
   * Encapsulated PostScript Level III with TIFF preview.
   */
  Ept3: "EPT3",
  /**
   * Epson Raw Format.
   */
  Erf: "ERF",
  /**
   * High Dynamic-range (HDR).
   */
  Exr: "EXR",
  /**
   * Farbfeld.
   */
  Farbfeld: "FARBFELD",
  /**
   * Group 3 FAX.
   */
  Fax: "FAX",
  /**
   * Farbfeld.
   */
  Ff: "FF",
  /**
   * Hasselblad CFV/H3D39II Raw Format.
   */
  Fff: "FFF",
  /**
   * Uniform Resource Locator (file://).
   */
  File: "FILE",
  /**
   * Flexible Image Transport System.
   */
  Fits: "FITS",
  /**
   * FilmLight.
   */
  Fl32: "FL32",
  /**
   * Flash Video Stream.
   */
  Flv: "FLV",
  /**
   * Plasma fractal image.
   */
  Fractal: "FRACTAL",
  /**
   * Uniform Resource Locator (ftp://).
   */
  Ftp: "FTP",
  /**
   * Flexible Image Transport System.
   */
  Fts: "FTS",
  /**
   * Formatted text image.
   */
  Ftxt: "FTXT",
  /**
   * Raw green samples.
   */
  G: "G",
  /**
   * Group 3 FAX.
   */
  G3: "G3",
  /**
   * Group 4 FAX.
   */
  G4: "G4",
  /**
   * CompuServe graphics interchange format.
   */
  Gif: "GIF",
  /**
   * CompuServe graphics interchange format.
   */
  Gif87: "GIF87",
  /**
   * Gradual linear passing from one shade to another.
   */
  Gradient: "GRADIENT",
  /**
   * Raw gray samples.
   */
  Gray: "GRAY",
  /**
   * Raw gray and alpha samples.
   */
  Graya: "GRAYA",
  /**
   * Raw CCITT Group4.
   */
  Group4: "GROUP4",
  /**
   * Identity Hald color lookup table image.
   */
  Hald: "HALD",
  /**
   * Radiance RGBE image format.
   */
  Hdr: "HDR",
  /**
   * High Efficiency Image Format.
   */
  Heic: "HEIC",
  /**
   * High Efficiency Image Format.
   */
  Heif: "HEIF",
  /**
   * Histogram of the image.
   */
  Histogram: "HISTOGRAM",
  /**
   * Slow Scan TeleVision.
   */
  Hrz: "HRZ",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Htm: "HTM",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Html: "HTML",
  /**
   * Uniform Resource Locator (http://).
   */
  Http: "HTTP",
  /**
   * Uniform Resource Locator (https://).
   */
  Https: "HTTPS",
  /**
   * Truevision Targa image.
   */
  Icb: "ICB",
  /**
   * Microsoft icon.
   */
  Ico: "ICO",
  /**
   * Microsoft icon.
   */
  Icon: "ICON",
  /**
   * Phase One Raw Format.
   */
  Iiq: "IIQ",
  /**
   * The image format and characteristics.
   */
  Info: "INFO",
  /**
   * Base64-encoded inline images.
   */
  Inline: "INLINE",
  /**
   * IPL Image Sequence.
   */
  Ipl: "IPL",
  /**
   * ISO/TR 11548-1 format.
   */
  Isobrl: "ISOBRL",
  /**
   * ISO/TR 11548-1 format 6dot.
   */
  Isobrl6: "ISOBRL6",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  J2c: "J2C",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  J2k: "J2K",
  /**
   * JPEG Network Graphics.
   */
  Jng: "JNG",
  /**
   * Garmin tile format.
   */
  Jnx: "JNX",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jp2: "JP2",
  /**
   * JPEG-2000 Code Stream Syntax.
   */
  Jpc: "JPC",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpe: "JPE",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpeg: "JPEG",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jpg: "JPG",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jpm: "JPM",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Jps: "JPS",
  /**
   * JPEG-2000 File Format Syntax.
   */
  Jpt: "JPT",
  /**
   * The image format and characteristics.
   */
  Json: "JSON",
  /**
   * JPEG XL Lossless JPEG1 Recompression.
   */
  Jxl: "JXL",
  /**
   * Raw black samples.
   */
  K: "K",
  /**
   * Kodak Digital Camera Raw Format.
   */
  K25: "K25",
  /**
   * Kodak Digital Camera Raw Format.
   */
  Kdc: "KDC",
  /**
   * Image label.
   */
  Label: "LABEL",
  /**
   * Raw magenta samples.
   */
  M: "M",
  /**
   * MPEG Video Stream.
   */
  M2v: "M2V",
  /**
   * Raw MPEG-4 Video.
   */
  M4v: "M4V",
  /**
   * MAC Paint.
   */
  Mac: "MAC",
  /**
   * Colormap intensities and indices.
   */
  Map: "MAP",
  /**
   * Image Clip Mask.
   */
  Mask: "MASK",
  /**
   * MATLAB level 5 image format.
   */
  Mat: "MAT",
  /**
   * MATTE format.
   */
  Matte: "MATTE",
  /**
   * Minolta Digital Camera Raw Format.
   */
  Mdc: "MDC",
  /**
   * Mamiya Raw Format.
   */
  Mef: "MEF",
  /**
   * Magick Image File Format.
   */
  Miff: "MIFF",
  /**
   * Multimedia Container.
   */
  Mkv: "MKV",
  /**
   * Multiple-image Network Graphics.
   */
  Mng: "MNG",
  /**
   * Raw bi-level bitmap.
   */
  Mono: "MONO",
  /**
   * MPEG Video Stream.
   */
  Mov: "MOV",
  /**
   * Aptus Leaf Raw Format.
   */
  Mos: "MOS",
  /**
   * MPEG-4 Video Stream.
   */
  Mp4: "MP4",
  /**
   * Magick Persistent Cache image format.
   */
  Mpc: "MPC",
  /**
   * MPEG Video Stream.
   */
  Mpeg: "MPEG",
  /**
   * MPEG Video Stream.
   */
  Mpg: "MPG",
  /**
   * Joint Photographic Experts Group JFIF format (Jpeg).
   */
  Mpo: "MPO",
  /**
   * Sony (Minolta) Raw Format.
   */
  Mrw: "MRW",
  /**
   * Magick Scripting Language.
   */
  Msl: "MSL",
  /**
   * ImageMagick's own SVG internal renderer.
   */
  Msvg: "MSVG",
  /**
   * MTV Raytracing image format.
   */
  Mtv: "MTV",
  /**
   * Magick Vector Graphics.
   */
  Mvg: "MVG",
  /**
   * Nikon Digital SLR Camera Raw Format.
   */
  Nef: "NEF",
  /**
   * Nikon Digital SLR Camera Raw Format.
   */
  Nrw: "NRW",
  /**
   * Constant image of uniform color.
   */
  Null: "NULL",
  /**
   * Raw opacity samples.
   */
  O: "O",
  /**
   * OpenRaster format.
   */
  Ora: "ORA",
  /**
   * Olympus Digital Camera Raw Format.
   */
  Orf: "ORF",
  /**
   * On-the-air bitmap.
   */
  Otb: "OTB",
  /**
   * Open Type font.
   */
  Otf: "OTF",
  /**
   * 16bit/pixel interleaved YUV.
   */
  Pal: "PAL",
  /**
   * Palm pixmap.
   */
  Palm: "PALM",
  /**
   * Common 2-dimensional bitmap format.
   */
  Pam: "PAM",
  /**
   * Pango Markup Language.
   */
  Pango: "PANGO",
  /**
   * Predefined pattern.
   */
  Pattern: "PATTERN",
  /**
   * Portable bitmap format (black and white).
   */
  Pbm: "PBM",
  /**
   * Photo CD.
   */
  Pcd: "PCD",
  /**
   * Photo CD.
   */
  Pcds: "PCDS",
  /**
   * Printer Control Language.
   */
  Pcl: "PCL",
  /**
   * Apple Macintosh QuickDraw/PICT.
   */
  Pct: "PCT",
  /**
   * ZSoft IBM PC Paintbrush.
   */
  Pcx: "PCX",
  /**
   * Palm Database ImageViewer Format.
   */
  Pdb: "PDB",
  /**
   * Portable Document Format.
   */
  Pdf: "PDF",
  /**
   * Portable Document Archive Format.
   */
  Pdfa: "PDFA",
  /**
   * Pentax Electronic Raw Format.
   */
  Pef: "PEF",
  /**
   * Embrid Embroidery Format.
   */
  Pes: "PES",
  /**
   * Postscript Type 1 font (ASCII).
   */
  Pfa: "PFA",
  /**
   * Postscript Type 1 font (binary).
   */
  Pfb: "PFB",
  /**
   * Portable float format.
   */
  Pfm: "PFM",
  /**
   * Portable graymap format (gray scale).
   */
  Pgm: "PGM",
  /**
   * JPEG 2000 uncompressed format.
   */
  Pgx: "PGX",
  /**
   * Portable half float format.
   */
  Phm: "PHM",
  /**
   * Personal Icon.
   */
  Picon: "PICON",
  /**
   * Apple Macintosh QuickDraw/PICT.
   */
  Pict: "PICT",
  /**
   * Alias/Wavefront RLE image format.
   */
  Pix: "PIX",
  /**
   * Joint Photographic Experts Group JFIF format.
   */
  Pjpeg: "PJPEG",
  /**
   * Plasma fractal image.
   */
  Plasma: "PLASMA",
  /**
   * Portable Network Graphics.
   */
  Png: "PNG",
  /**
   * PNG inheriting bit-depth and color-type from original.
   */
  Png00: "PNG00",
  /**
   * opaque or binary transparent 24-bit RGB.
   */
  Png24: "PNG24",
  /**
   * opaque or transparent 32-bit RGBA.
   */
  Png32: "PNG32",
  /**
   * opaque or binary transparent 48-bit RGB.
   */
  Png48: "PNG48",
  /**
   * opaque or transparent 64-bit RGBA.
   */
  Png64: "PNG64",
  /**
   * 8-bit indexed with optional binary transparency.
   */
  Png8: "PNG8",
  /**
   * Portable anymap.
   */
  Pnm: "PNM",
  /**
   * Pocketmod Personal Organizer (Pdf).
   */
  Pocketmod: "POCKETMOD",
  /**
   * Portable pixmap format (color).
   */
  Ppm: "PPM",
  /**
   * PostScript.
   */
  Ps: "PS",
  /**
   * Level II PostScript.
   */
  Ps2: "PS2",
  /**
   * Level III PostScript.
   */
  Ps3: "PS3",
  /**
   * Adobe Large Document Format.
   */
  Psb: "PSB",
  /**
   * Adobe Photoshop bitmap.
   */
  Psd: "PSD",
  /**
   * Pyramid encoded TIFF.
   */
  Ptif: "PTIF",
  /**
   * Seattle Film Works.
   */
  Pwp: "PWP",
  /**
   * Quite OK image format.
   */
  Qoi: "QOI",
  /**
   * Raw red samples.
   */
  R: "R",
  /**
   * Gradual radial passing from one shade to another.
   */
  RadialGradient: "RADIAL-GRADIENT",
  /**
   * Fuji CCD-RAW Graphic File.
   */
  Raf: "RAF",
  /**
   * SUN Rasterfile.
   */
  Ras: "RAS",
  /**
   * Raw.
   */
  Raw: "RAW",
  /**
   * Raw red, green, and blue samples.
   */
  Rgb: "RGB",
  /**
   * Raw red, green, blue samples in 565 format.
   */
  Rgb565: "RGB565",
  /**
   * Raw red, green, blue, and alpha samples.
   */
  Rgba: "RGBA",
  /**
   * Raw red, green, blue, and opacity samples.
   */
  Rgbo: "RGBO",
  /**
   * LEGO Mindstorms EV3 Robot Graphic Format (black and white).
   */
  Rgf: "RGF",
  /**
   * Alias/Wavefront image.
   */
  Rla: "RLA",
  /**
   * Utah Run length encoded image.
   */
  Rle: "RLE",
  /**
   * Raw Media Format.
   */
  Rmf: "RMF",
  /**
   * Panasonic Lumix Raw Format.
   */
  Rw2: "RW2",
  /**
   * Leica Raw Format.
   */
  Rwl: "RWL",
  /**
   * ZX-Spectrum SCREEN$.
   */
  Scr: "SCR",
  /**
   * Screen shot.
   */
  Screenshot: "SCREENSHOT",
  /**
   * Scitex HandShake.
   */
  Sct: "SCT",
  /**
   * Seattle Film Works.
   */
  Sfw: "SFW",
  /**
   * Irix RGB image.
   */
  Sgi: "SGI",
  /**
   * Hypertext Markup Language and a client-side image map.
   */
  Shtml: "SHTML",
  /**
   * DEC SIXEL Graphics Format.
   */
  Six: "SIX",
  /**
   * DEC SIXEL Graphics Format.
   */
  Sixel: "SIXEL",
  /**
   * Sparse Color.
   */
  SparseColor: "SPARSE-COLOR",
  /**
   * Sony Raw Format 2.
   */
  Sr2: "SR2",
  /**
   * Sony Raw Format.
   */
  Srf: "SRF",
  /**
   * Samsung Raw Format.
   */
  Srw: "SRW",
  /**
   * Steganographic image.
   */
  Stegano: "STEGANO",
  /**
   * Sinar CaptureShop Raw Format.
   */
  Sti: "STI",
  /**
   * String to image and back.
   */
  StrImg: "STRIMG",
  /**
   * SUN Rasterfile.
   */
  Sun: "SUN",
  /**
   * Scalable Vector Graphics.
   */
  Svg: "SVG",
  /**
   * Compressed Scalable Vector Graphics.
   */
  Svgz: "SVGZ",
  /**
   * Text.
   */
  Text: "TEXT",
  /**
   * Truevision Targa image.
   */
  Tga: "TGA",
  /**
   * EXIF Profile Thumbnail.
   */
  Thumbnail: "THUMBNAIL",
  /**
   * Tagged Image File Format.
   */
  Tif: "TIF",
  /**
   * Tagged Image File Format.
   */
  Tiff: "TIFF",
  /**
   * Tagged Image File Format (64-bit).
   */
  Tiff64: "TIFF64",
  /**
   * Tile image with a texture.
   */
  Tile: "TILE",
  /**
   * PSX TIM.
   */
  Tim: "TIM",
  /**
   * PS2 TIM2.
   */
  Tm2: "TM2",
  /**
   * TrueType font collection.
   */
  Ttc: "TTC",
  /**
   * TrueType font.
   */
  Ttf: "TTF",
  /**
   * Text.
   */
  Txt: "TXT",
  /**
   * Unicode Text format.
   */
  Ubrl: "UBRL",
  /**
   * Unicode Text format 6dot.
   */
  Ubrl6: "UBRL6",
  /**
   * X-Motif UIL table.
   */
  Uil: "UIL",
  /**
   * 16bit/pixel interleaved YUV.
   */
  Uyvy: "UYVY",
  /**
   * Truevision Targa image.
   */
  Vda: "VDA",
  /**
   * VICAR rasterfile format.
   */
  Vicar: "VICAR",
  /**
   * Visual Image Directory.
   */
  Vid: "VID",
  /**
   * Khoros Visualization image.
   */
  Viff: "VIFF",
  /**
   * VIPS image.
   */
  Vips: "VIPS",
  /**
   * Truevision Targa image.
   */
  Vst: "VST",
  /**
   * Open Web Media.
   */
  WebM: "WEBM",
  /**
   * WebP Image Format.
   */
  WebP: "WEBP",
  /**
   * Wireless Bitmap (level 0) image.
   */
  Wbmp: "WBMP",
  /**
   * Windows Media Video.
   */
  Wmv: "WMV",
  /**
   * Word Perfect Graphics.
   */
  Wpg: "WPG",
  /**
   * Sigma Camera RAW Format.
   */
  X3f: "X3F",
  /**
   * X Windows system bitmap (black and white).
   */
  Xbm: "XBM",
  /**
   * Constant image uniform color.
   */
  Xc: "XC",
  /**
   * GIMP image.
   */
  Xcf: "XCF",
  /**
   * X Windows system pixmap (color).
   */
  Xpm: "XPM",
  /**
   * Microsoft XML Paper Specification.
   */
  Xps: "XPS",
  /**
   * Khoros Visualization image.
   */
  Xv: "XV",
  /**
   * Raw yellow samples.
   */
  Y: "Y",
  /**
   * The image format and characteristics.
   */
  Yaml: "YAML",
  /**
   * Raw Y, Cb, and Cr samples.
   */
  Ycbcr: "YCBCR",
  /**
   * Raw Y, Cb, Cr, and alpha samples.
   */
  Ycbcra: "YCBCRA",
  /**
   * CCIR 601 4:1:1 or 4:2:2.
   */
  Yuv: "YUV"
}, Pt = {
  Merge: 13,
  Flatten: 14,
  Mosaic: 15,
  Trimbounds: 16
};
class Mr extends Ue {
  constructor(a) {
    const s = l._api._MagickSettings_Create(), i = l._api._MagickSettings_Dispose;
    if (super(s, i), a._fileName !== void 0 && b(a._fileName, (g) => {
      l._api._MagickSettings_SetFileName(this._instance, g);
    }), a._ping && l._api._MagickSettings_SetPing(this._instance, 1), a._quality !== void 0 && l._api._MagickSettings_SetQuality(this._instance, a._quality), a.antiAlias !== void 0 && l._api._MagickSettings_AntiAlias_Set(this._instance, a.antiAlias ? 1 : 0), a.backgroundColor !== void 0 && a.backgroundColor._use((g) => {
      l._api._MagickSettings_BackgroundColor_Set(this._instance, g);
    }), a.colorSpace !== void 0 && l._api._MagickSettings_ColorSpace_Set(this._instance, a.colorSpace), a.colorType !== void 0 && l._api._MagickSettings_ColorType_Set(this._instance, a.colorType), a.compression !== void 0 && l._api._MagickSettings_Compression_Set(this._instance, a.compression), a.debug !== void 0 && l._api._MagickSettings_Debug_Set(this._instance, a.debug ? 1 : 0), a.density !== void 0) {
      const g = a.density.toString();
      b(g, (m) => {
        l._api._MagickSettings_Density_Set(this._instance, m);
      });
    }
    if (a.depth !== void 0 && l._api._MagickSettings_Depth_Set(this._instance, a.depth), a.endian !== void 0 && l._api._MagickSettings_Endian_Set(this._instance, a.endian), a.fillColor !== void 0 && this.setOption("fill", a.fillColor.toString()), a.font !== void 0) {
      const g = Te._getFontFileName(a.font);
      b(g, (m) => {
        l._api._MagickSettings_SetFont(this._instance, m);
      });
    }
    a.fontPointsize !== void 0 && l._api._MagickSettings_FontPointsize_Set(this._instance, a.fontPointsize), a.format !== void 0 && b(a.format, (g) => {
      l._api._MagickSettings_Format_Set(this._instance, g);
    }), a.interlace !== void 0 && l._api._MagickSettings_Interlace_Set(this._instance, a.interlace), a.strokeColor !== void 0 && this.setOption("stroke", a.strokeColor.toString()), a.strokeWidth !== void 0 && this.setOption("strokeWidth", a.strokeWidth.toString()), a.textInterlineSpacing !== void 0 && this.setOption("interline-spacing", a.textInterlineSpacing.toString()), a.textKerning !== void 0 && this.setOption("kerning", a.textKerning.toString());
    for (const g in a._options)
      this.setOption(g, a._options[g]);
  }
  setOption(a, s) {
    b(a, (i) => {
      b(s, (g) => {
        l._api._MagickSettings_SetOption(this._instance, i, g);
      });
    });
  }
}
class gt {
  /** @internal */
  _options = {};
  /** @internal */
  _fileName;
  /** @internal */
  _ping = !1;
  /** @internal */
  _quality;
  /**
   * Gets or sets a value indicating whether anti-aliasing should be enabled (default true).
   */
  antiAlias;
  /**
   * Gets or sets the background color.
   */
  backgroundColor;
  /**
   * Gets or sets the color space.
   */
  colorSpace;
  /**
   * Gets or sets the color type of the image.
   */
  colorType;
  /**
   * Gets or sets the compression method to use.
   */
  compression;
  /**
   * Gets or sets a value indicating whether printing of debug messages from ImageMagick is enabled when a debugger is attached.
   */
  debug;
  /**
   * Gets or sets the vertical and horizontal resolution in pixels.
   */
  density;
  /**
   * Gets or sets the depth (bits allocated to red/green/blue components).
   */
  depth;
  /**
   * Gets or sets the endianness (little like Intel or big like SPARC) for image formats which support
   * endian-specific options.
   */
  endian;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the text rendering font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the the format of the image.
   */
  format;
  /**
   * Gets or sets the interlace method.
   */
  interlace;
  /**
   * Gets or sets the color to use when drawing object outlines.
   */
  strokeColor;
  /**
   * Gets or sets the stroke width for drawing lines, circles, ellipses, etc.
   */
  strokeWidth;
  /**
   * Gets or sets the text inter-line spacing.
   */
  textInterlineSpacing;
  /**
   * Gets or sets the text inter-character kerning.
   */
  textKerning;
  getDefine(a, s) {
    return s !== void 0 ? this._options[`${a}:${s}`] ?? null : this._options[a] ?? null;
  }
  setDefine(a, s, i) {
    if (i === void 0)
      this._options[a] = s;
    else {
      const g = this.parseDefine(a, s);
      typeof i == "string" ? this._options[g] = i : typeof i == "number" ? this._options[g] = i.toString() : this._options[g] = i ? "true" : "false";
    }
  }
  /**
   * Sets format-specific options with the specified defines.
   */
  setDefines(a) {
    a.getDefines().forEach((s) => {
      s !== void 0 && this.setDefine(s.format, s.name, s.value);
    });
  }
  /** @internal */
  _clone() {
    const a = new gt();
    return Object.assign(a, this), a;
  }
  /** @internal */
  _use(a) {
    const s = new Mr(this);
    return ce._disposeAfterExecution(s, a);
  }
  parseDefine(a, s) {
    return a === Re.Unknown ? s : `${a}:${s}`;
  }
}
class Ee extends gt {
  constructor(a) {
    super(), Object.assign(this, a);
  }
  /**
   * Gets or sets the specified area to extract from the image.
   */
  extractArea;
  /**
   * Gets or sets the index of the image to read from a multi layer/frame image.
   */
  frameIndex;
  /**
   * Gets or sets the number of images to read from a multi layer/frame image.
   */
  frameCount;
  /**
   * Gets or sets the height.
   */
  height;
  /**
   * Gets or sets a value indicating whether the exif profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithExifProfile() {
    const a = this.getDefine("exif:sync-image");
    return a === null ? !0 : a.toLowerCase() === "true";
  }
  set syncImageWithExifProfile(a) {
    this.setDefine("exif:sync-image", a.toString());
  }
  /**
   * Gets or sets a value indicating whether the tiff profile should be used to update
   * some of the properties of the image (e.g. {@link MagickImage#density},
   * {@link MagickImage#orientation}).
   */
  get syncImageWithTiffProperties() {
    const a = this.getDefine("tiff:sync-image");
    return a === null ? !0 : a.toLowerCase() === "true";
  }
  set syncImageWithTiffProperties(a) {
    this.setDefine("tiff:sync-image", a.toString());
  }
  /**
   * Gets or sets the width.
   */
  width;
  /** @internal */
  _use(a) {
    const s = new Mr(this), i = this.getSize();
    if (i !== "" && b(i, (g) => {
      l._api._MagickSettings_SetSize(s._instance, g);
    }), this.frameIndex !== void 0 || this.frameCount !== void 0) {
      const g = this.frameIndex ?? 0, m = this.frameCount ?? 1;
      l._api._MagickSettings_SetScene(s._instance, g), l._api._MagickSettings_SetNumberScenes(s._instance, m);
      const p = this.frameCount !== void 0 ? `${g}-${g + m}` : g.toString();
      b(p.toString(), (M) => {
        l._api._MagickSettings_SetScenes(s._instance, M);
      });
    }
    return this.extractArea !== void 0 && b(this.extractArea.toString(), (g) => {
      l._api._MagickSettings_Extract_Set(s._instance, g);
    }), ce._disposeAfterExecution(s, a);
  }
  getSize() {
    return this.width !== void 0 && this.height !== void 0 ? `${this.width}x${this.height}` : this.width !== void 0 ? `${this.width}x` : this.height !== void 0 ? `x${this.height}` : "";
  }
}
const kr = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * No.
   */
  No: 1,
  /**
   * Riemersma.
   */
  Riemersma: 2,
  /**
   * FloydSteinberg.
   */
  FloydSteinberg: 3
};
class ho extends Ue {
  constructor(a) {
    const s = l._api._QuantizeSettings_Create(), i = l._api._QuantizeSettings_Dispose;
    super(s, i), l._api._QuantizeSettings_SetColors(this._instance, a.colors), l._api._QuantizeSettings_SetColorSpace(this._instance, a.colorSpace), l._api._QuantizeSettings_SetDitherMethod(this._instance, a.ditherMethod ?? kr.No), l._api._QuantizeSettings_SetMeasureErrors(this._instance, a.measureErrors ? 1 : 0), l._api._QuantizeSettings_SetTreeDepth(this._instance, a.treeDepth);
  }
}
class ai {
  constructor() {
    this.colors = 256, this.colorSpace = E.Undefined, this.ditherMethod = kr.Riemersma, this.measureErrors = !1, this.treeDepth = 0;
  }
  /**
   * Gets or sets the maximum number of colors to quantize to.
   */
  colors;
  /**
   * Gets or sets the colorspace to quantize in.
   */
  colorSpace;
  /// <summary>
  /// Gets or sets the dither method to use.
  /// </summary>
  ditherMethod;
  /// <summary>
  /// Gets or sets a value indicating whether errors should be measured.
  /// </summary>
  measureErrors;
  /// <summary>
  /// Gets or sets the quantization tree-depth.
  /// </summary>
  treeDepth;
  /** @internal */
  _use(a) {
    const s = new ho(this);
    return ce._disposeAfterExecution(s, a);
  }
}
class Ce {
  _image;
  _names = [];
  constructor(a) {
    this._image = a;
  }
  setArtifact(a, s) {
    this._names.push(a), this._image.setArtifact(a, s);
  }
  static use(a, s) {
    const i = new Ce(a);
    try {
      return s(i);
    } finally {
      i.dispose();
    }
  }
  dispose() {
    for (const a of this._names)
      this._image.removeArtifact(a);
  }
}
function lr(S, a) {
  if (S.byteLength === 0)
    throw new U("The specified array cannot be empty");
  let s = 0;
  try {
    return s = l._api._malloc(S.byteLength), l._api.HEAPU8.set(S, s), a(s);
  } finally {
    s !== 0 && l._api._free(s);
  }
}
function Sr(S, a) {
  if (S.length === 0)
    throw new U("The specified array cannot be empty");
  const s = S.length * 8;
  let i = 0;
  try {
    i = l._api._malloc(s);
    const g = new ArrayBuffer(s), m = new Float64Array(g);
    for (let p = 0; p < S.length; p++)
      m[p] = S[p];
    return l._api.HEAPU8.set(new Int8Array(g), i), a(i);
  } finally {
    i !== 0 && l._api._free(i);
  }
}
function mo(S, a) {
  if (S.byteLength === 0)
    throw new U("The specified array cannot be empty");
  let s = 0;
  try {
    return s = l._api._malloc(S.byteLength), l._api.HEAPU8.set(S, s), a(s);
  } finally {
    s !== 0 && l._api._free(s);
  }
}
class Pe extends Array {
  constructor() {
    super();
  }
  static create(a) {
    const s = Pe.createObject();
    return a !== void 0 && s.read(a), s;
  }
  dispose() {
    let a = this.pop();
    for (; a !== void 0; )
      a.dispose(), a = this.pop();
  }
  appendHorizontally(a) {
    return this.createImage((s, i) => l._api._MagickImageCollection_Append(s, 0, i.ptr), a);
  }
  appendVertically(a) {
    return this.createImage((s, i) => l._api._MagickImageCollection_Append(s, 1, i.ptr), a);
  }
  clone(a) {
    const s = Pe.create();
    for (let i = 0; i < this.length; i++)
      s.push(ae._clone(this[i]));
    return s._use(a);
  }
  coalesce() {
    this.replaceImages((a, s) => l._api._MagickImageCollection_Coalesce(a, s.ptr));
  }
  combine(a, s) {
    let i = s, g = E.sRGB;
    return typeof a == "number" ? g = a : i = a, this.createImage((m, p) => l._api._MagickImageCollection_Combine(m, g, p.ptr), i);
  }
  complex(a, s) {
    return Ce.use(this[0], (i) => (a._setArtifacts(i), this.createImage((g, m) => l._api._MagickImageCollection_Complex(g, a.complexOperator, m.ptr), s)));
  }
  deconstruct() {
    this.replaceImages((a, s) => l._api._MagickImageCollection_Deconstruct(a, s.ptr));
  }
  evaluate(a, s) {
    return this.createImage((i, g) => l._api._MagickImageCollection_Evaluate(i, a, g.ptr), s);
  }
  flatten(a) {
    return this.mergeImages(Pt.Flatten, a);
  }
  fx(a, s, i) {
    this.throwIfEmpty();
    let g = X.All, m = i;
    return typeof s == "number" ? g = s : m = s, b(a, (p) => this.createImage((M, I) => l._api._MagickImageCollection_Fx(M, p, g, I.ptr), m));
  }
  merge(a) {
    return this.mergeImages(Pt.Merge, a);
  }
  montage(a, s) {
    return this.throwIfEmpty(), this.attachImages((i) => {
      const g = a._use((m) => T.use((p) => {
        const M = l._api._MagickImageCollection_Montage(i, m._instance, p.ptr);
        return this.checkResult(M, p);
      }));
      return Pe._createFromImages(g, this.getSettings())._use((m) => {
        const p = a.transparentColor;
        return p !== void 0 && m.forEach((M) => {
          M.transparent(p);
        }), m.merge(s);
      });
    });
  }
  morph(a) {
    if (this.length < 2)
      throw new U("operation requires at least two images");
    this.replaceImages((s, i) => l._api._MagickImageCollection_Morph(s, a, i.ptr));
  }
  mosaic(a) {
    return this.mergeImages(Pt.Mosaic, a);
  }
  optimize() {
    this.replaceImages((a, s) => l._api._MagickImageCollection_Optimize(a, s.ptr));
  }
  optimizePlus() {
    this.replaceImages((a, s) => l._api._MagickImageCollection_OptimizePlus(a, s.ptr));
  }
  optimizeTransparency() {
    this.throwIfEmpty(), this.attachImages((a) => {
      T.usePointer((s) => {
        l._api._MagickImageCollection_OptimizeTransparency(a, s);
      });
    });
  }
  ping(a, s) {
    this.readOrPing(!0, a, s);
  }
  polynomial(a, s) {
    return this.createImage((i, g) => Sr(a, (m) => l._api._MagickImageCollection_Polynomial(i, m, a.length, g.ptr)), s);
  }
  quantize(a) {
    this.throwIfEmpty();
    const s = a === void 0 ? new ai() : a;
    return this.attachImages((i) => {
      s._use((g) => {
        T.usePointer((m) => {
          l._api._MagickImageCollection_Quantize(i, g._instance, m);
        });
      });
    }), s.measureErrors ? bt._create(this[0]) : null;
  }
  read(a, s) {
    this.readOrPing(!1, a, s);
  }
  remap(a, s) {
    this.throwIfEmpty();
    const i = s === void 0 ? new ai() : s;
    this.attachImages((g) => {
      i._use((m) => {
        T.use((p) => {
          l._api._MagickImageCollection_Remap(g, m._instance, a._instance, p.ptr);
        });
      });
    });
  }
  resetPage() {
    this.forEach((a) => {
      a.resetPage();
    });
  }
  smushHorizontal(a, s) {
    return this.smush(a, !1, s);
  }
  smushVertical(a, s) {
    return this.smush(a, !0, s);
  }
  trimBounds() {
    this.mergeImages(Pt.Trimbounds, () => {
    });
  }
  write(a, s) {
    this.throwIfEmpty();
    let i = 0, g = 0;
    const m = this[0], p = this.getSettings();
    s !== void 0 ? p.format = a : (s = a, p.format = m.format), T.use((I) => {
      Ge.use((R) => {
        p._use((B) => {
          this.attachImages((J) => {
            i = l._api._MagickImage_WriteBlob(J, B._instance, R.ptr, I.ptr), g = R.value;
          });
        });
      });
    });
    const M = new pr(i, g, s);
    return ce._disposeAfterExecution(M, M.func);
  }
  /** @internal */
  static _createFromImages(a, s) {
    const i = Pe.createObject();
    return i.addImages(a, s._clone()), i;
  }
  _use(a) {
    return ce._disposeAfterExecution(this, a);
  }
  addImages(a, s) {
    s.format = Re.Unknown;
    let i = a;
    for (; i !== 0; ) {
      const g = l._api._MagickImage_GetNext(i);
      l._api._MagickImage_SetNext(i, 0), this.push(ae._createFromImage(i, s)), i = g;
    }
  }
  attachImages(a) {
    try {
      for (let s = 0; s < this.length - 1; s++)
        l._api._MagickImage_SetNext(this[s]._instance, this[s + 1]._instance);
      return a(this[0]._instance);
    } finally {
      for (let s = 0; s < this.length - 1; s++)
        l._api._MagickImage_SetNext(this[s]._instance, 0);
    }
  }
  checkResult(a, s) {
    return s.check(() => a, () => (l._api._MagickImageCollection_Dispose(a), 0));
  }
  static createObject() {
    return Object.create(Pe.prototype);
  }
  createImage(a, s) {
    this.throwIfEmpty();
    const i = this.attachImages((m) => T.use((p) => {
      const M = a(m, p);
      return this.checkResult(M, p);
    }));
    return ae._createFromImage(i, this.getSettings())._use(s);
  }
  getSettings() {
    return this[0]._getSettings()._clone();
  }
  mergeImages(a, s) {
    return this.createImage((i, g) => l._api._MagickImageCollection_Merge(i, a, g.ptr), s);
  }
  readOrPing(a, s, i) {
    this.dispose(), T.use((g) => {
      const m = i === void 0 ? new Ee() : new Ee(i);
      m._ping = a, typeof s == "string" ? (m._fileName = s, m._use((p) => {
        const M = l._api._MagickImageCollection_ReadFile(p._instance, g.ptr);
        this.addImages(M, m);
      })) : m._use((p) => {
        const M = s.byteLength;
        let I = 0;
        try {
          I = l._api._malloc(M), l._api.HEAPU8.set(s, I);
          const R = l._api._MagickImageCollection_ReadBlob(p._instance, I, 0, M, g.ptr);
          this.addImages(R, m);
        } finally {
          I !== 0 && l._api._free(I);
        }
      });
    });
  }
  replaceImages(a) {
    this.throwIfEmpty();
    const s = this.attachImages((g) => T.use((m) => {
      const p = a(g, m);
      return this.checkResult(p, m);
    })), i = this.getSettings()._clone();
    this.dispose(), this.addImages(s, i);
  }
  smush(a, s, i) {
    return this.createImage((g, m) => l._api._MagickImageCollection_Smush(g, a, s ? 1 : 0, m.ptr), i);
  }
  throwIfEmpty() {
    if (this.length === 0)
      throw new U("operation requires at least one image");
  }
}
class Z {
  _value;
  /**
   * Initializes a new instance of the {@link Percentage} class.
   * @param value -The value (0% = 0.0, 100% = 100.0)
   */
  constructor(a) {
    this._value = a;
  }
  /** @internal */
  static _fromQuantum(a) {
    return new Z(a / $e.max * 100);
  }
  /**
   * ultiplies the value by the specified percentage.
   * @param value The value to use.
   * @returns The new value.
   */
  multiply(a) {
    return a * this._value / 100;
  }
  /**
   * Returns a double that represents the current percentage.
   * @returns A double that represents the current percentage.
   */
  toDouble() {
    return this._value;
  }
  /**
   * Returns a string that represents the current percentage.
   * @returns A string that represents the current percentage.
   */
  toString() {
    return `${parseFloat(this._value.toFixed(2))}%`;
  }
  /** @internal */
  _toQuantum() {
    return $e.max * (this._value / 100);
  }
}
class gr {
  static use(a, s, i) {
    const g = l._api._MagickRectangle_Create();
    try {
      l._api._MagickRectangle_X_Set(g, s.x), l._api._MagickRectangle_Y_Set(g, s.y);
      let m = s.width, p = s.height;
      return s.isPercentage && (m = new Z(s.width).multiply(a.width), p = new Z(s.height).multiply(a.height)), l._api._MagickRectangle_Width_Set(g, m), l._api._MagickRectangle_Height_Set(g, p), i(g);
    } finally {
      l._api._MagickRectangle_Dispose(g);
    }
  }
}
class ur {
  _values;
  constructor() {
    this._values = new Array(7).fill(0);
  }
  get(a) {
    return this._values[a];
  }
  set(a, s) {
    this._values[a] = s;
  }
}
class et {
  _huPhashes = /* @__PURE__ */ new Map();
  _hash = "";
  channel;
  constructor(a, s, i) {
    if (this.channel = a, typeof i == "number")
      for (let g = 0; g < s.length; g++) {
        const m = new ur();
        for (let p = 0; p < 7; p++) {
          const M = l._api._ChannelPerceptualHash_GetHuPhash(i, g, p);
          m.set(p, M);
        }
        this._huPhashes.set(s[g], m);
      }
    else
      this.parseHash(s, i);
  }
  huPhash(a, s) {
    if (s < 0 || s > 6)
      throw new U("Invalid index specified");
    const i = this._huPhashes.get(a);
    if (i === void 0)
      throw new U("Invalid color space specified");
    return i.get(s);
  }
  sumSquaredDistance(a) {
    let s = 0;
    return this._huPhashes.forEach((i, g) => {
      for (let m = 0; m < 7; m++) {
        const p = i.get(m), M = a.huPhash(g, m);
        s += (p - M) * (p - M);
      }
    }), s;
  }
  toString() {
    return this._hash == "" && this.setHash(), this._hash;
  }
  parseHash(a, s) {
    this._hash = s;
    let i = 0;
    for (const g of a) {
      const m = new ur();
      for (let p = 0; p < 7; p++, i += 5) {
        const M = Number.parseInt(s.substring(i, i + 5), 16);
        if (isNaN(M))
          throw new U("Invalid hash specified");
        let I = M / et.powerOfTen(M >> 17);
        M & 65536 && (I = -I), m.set(p, I);
      }
      this._huPhashes.set(g, m);
    }
  }
  static powerOfTen(a) {
    switch (a) {
      case 2:
        return 100;
      case 3:
        return 1e3;
      case 4:
        return 1e4;
      case 5:
        return 1e5;
      case 6:
        return 1e6;
      default:
        return 10;
    }
  }
  setHash() {
    this._hash = "", this._huPhashes.forEach((a) => {
      for (let s = 0; s < 7; s++) {
        let i = a.get(s), g = 0;
        for (; g < 7 && Math.abs(i * 10) < 65356; )
          i *= 10, g++;
        g <<= 1, g < 0 && (g |= 1), g = (g << 16) + Math.floor(i < 0 ? -(i - 0.5) : i + 0.5), this._hash += g.toString(16);
      }
    });
  }
}
class fe {
  _red;
  _green;
  _blue;
  constructor(a, s, i) {
    if (typeof a == "string") {
      const g = s ?? fe._defaultColorspaces();
      fe._validateColorSpaces(g);
      const m = 35 * g.length;
      if (a.length !== 3 * m)
        throw new U("Invalid hash size");
      this._red = new et(F.Red, g, a.substring(0, m)), this._blue = new et(F.Blue, g, a.substring(m, m + m)), this._green = new et(F.Green, g, a.substring(m + m));
    } else
      this._red = a, this._green = s, this._blue = i;
  }
  /** @internal */
  static _create(a, s, i) {
    if (i === 0)
      throw new U("The native operation failed to create an instance");
    const g = fe.createChannel(a, s, i, F.Red), m = fe.createChannel(a, s, i, F.Green), p = fe.createChannel(a, s, i, F.Blue);
    return new fe(g, m, p);
  }
  /** @internal */
  static _defaultColorspaces() {
    return [E.XyY, E.HSB];
  }
  /** @internal */
  static _validateColorSpaces(a) {
    if (a.length < 1 || a.length > 6)
      throw new U("Invalid number of colorspaces, the minimum is 1 and the maximum is 6");
    if (new Set(a).size !== a.length)
      throw new U("Specifying the same colorspace more than once is not allowed");
  }
  getChannel(a) {
    switch (a) {
      case F.Red:
        return this._red;
      case F.Green:
        return this._green;
      case F.Blue:
        return this._blue;
      default:
        return null;
    }
  }
  sumSquaredDistance(a) {
    const s = a.getChannel(F.Red), i = a.getChannel(F.Green), g = a.getChannel(F.Blue);
    if (s === null || i === null || g === null)
      throw new U("The other perceptual hash should contain a red, green and blue channel.");
    return this._red.sumSquaredDistance(s) + this._green.sumSquaredDistance(i) + this._blue.sumSquaredDistance(g);
  }
  toString() {
    return this._red.toString() + this._green.toString() + this._blue.toString();
  }
  static createChannel(a, s, i, g) {
    const m = l._api._PerceptualHash_GetInstance(a._instance, i, g);
    return new et(g, s, m);
  }
}
class it extends Ue {
  image;
  constructor(a) {
    const s = T.usePointer((g) => l._api._PixelCollection_Create(a._instance, g)), i = l._api._PixelCollection_Dispose;
    super(s, i), this.image = a;
  }
  /** @internal */
  static _create(a) {
    return new it(a);
  }
  static _use(a, s) {
    const i = new it(a);
    return ce._disposeAfterExecution(i, s);
  }
  /** @internal */
  static _map(a, s, i) {
    const g = new it(a);
    try {
      g.use(0, 0, a.width, a.height, s, (m) => {
        i(m);
      });
    } finally {
      g.dispose();
    }
  }
  getArea(a, s, i, g) {
    return T.usePointer((m) => {
      const p = l._api._PixelCollection_GetArea(this._instance, a, s, i, g, m), M = i * g * this.image.channelCount;
      return l._api.HEAPU8.subarray(p, p + M);
    });
  }
  getPixel(a, s) {
    return this.getArea(a, s, 1, 1);
  }
  setArea(a, s, i, g, m) {
    T.usePointer((p) => {
      const M = m instanceof Uint8Array ? m : new Uint8Array(m);
      mo(M, (I) => {
        l._api._PixelCollection_SetArea(this._instance, a, s, i, g, I, M.length, p);
      });
    });
  }
  setPixel(a, s, i) {
    i instanceof Uint8Array ? this.setArea(a, s, 1, 1, i) : this.setArea(a, s, 1, 1, i);
  }
  toByteArray(a, s, i, g, m) {
    return this.use(a, s, i, g, m, (p) => {
      if (p === 0)
        return null;
      const M = i * g * m.length;
      return l._api.HEAPU8.slice(p, p + M);
    });
  }
  use(a, s, i, g, m, p) {
    return b(m, (M) => T.use((I) => {
      let R = l._api._PixelCollection_ToByteArray(this._instance, a, s, i, g, M, I.ptr);
      return I.check(() => {
        const B = p(R);
        return R = l._api._MagickMemory_Relinquish(R), B;
      }, () => (R = l._api._MagickMemory_Relinquish(R), null));
    }));
  }
}
const po = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Average.
   */
  Average: 1,
  /**
   * Brightness.
   */
  Brightness: 2,
  /**
   * Lightness.
   */
  Lightness: 3,
  /**
   * MS.
   */
  MS: 4,
  /**
   * Rec601Luma.
   */
  Rec601Luma: 5,
  /**
   * Rec601Luminance.
   */
  Rec601Luminance: 6,
  /**
   * Rec709Luma.
   */
  Rec709Luma: 7,
  /**
   * Rec709Luminance.
   */
  Rec709Luminance: 8,
  /**
   * RMS.
   */
  RMS: 9
};
class He {
  /**
   * Initializes a new instance of the {@link PrimaryInfo} class.
   * @param x The x,
   * @param y The y.
   * @param z The z.
   */
  constructor(a, s, i) {
    this.x = a, this.y = s, this.z = i;
  }
  /**
   * Gets the X value.
   */
  x;
  /**
   * Gets the Y value.
   */
  y;
  /**
   * Gets the Z value.
   */
  z;
  /** @internal */
  static _create(a) {
    return a === 0 ? new He(0, 0, 0) : new He(
      l._api._PrimaryInfo_X_Get(a),
      l._api._PrimaryInfo_Y_Get(a),
      l._api._PrimaryInfo_Z_Get(a)
    );
  }
  /** @internal */
  _use(a) {
    let s = 0;
    try {
      s = l._api._PrimaryInfo_Create(), l._api._PrimaryInfo_X_Set(s, this.x), l._api._PrimaryInfo_Y_Set(s, this.y), l._api._PrimaryInfo_Z_Set(s, this.z), a(s);
    } finally {
      l._api._free(s);
    }
  }
}
class fo {
  channel;
  depth;
  entropy;
  kurtosis;
  maximum;
  mean;
  minimum;
  skewness;
  standardDeviation;
  constructor(a, s) {
    this.channel = a, this.depth = l._api._ChannelStatistics_Depth_Get(s), this.entropy = l._api._ChannelStatistics_Entropy_Get(s), this.kurtosis = l._api._ChannelStatistics_Kurtosis_Get(s), this.maximum = l._api._ChannelStatistics_Maximum_Get(s), this.mean = l._api._ChannelStatistics_Mean_Get(s), this.minimum = l._api._ChannelStatistics_Minimum_Get(s), this.skewness = l._api._ChannelStatistics_Skewness_Get(s), this.standardDeviation = l._api._ChannelStatistics_StandardDeviation_Get(s);
  }
}
class gi {
  _channels = /* @__PURE__ */ new Map();
  get channels() {
    return Array.from(this._channels.keys());
  }
  composite() {
    return this._channels.get(F.Composite);
  }
  getChannel(a) {
    const s = this._channels.get(a);
    return s !== void 0 ? s : null;
  }
  static _create(a, s, i) {
    const g = new gi();
    return a.channels.forEach((m) => {
      i >> m & 1 && g.addChannel(s, m);
    }), g.addChannel(s, F.Composite), g;
  }
  addChannel(a, s) {
    const i = l._api._Statistics_GetInstance(a, s);
    i !== 0 && this._channels.set(s, new fo(s, i));
  }
}
class Mo {
  static toArray(a) {
    if (a === 0)
      return null;
    const s = l._api._StringInfo_Datum_Get(a), i = l._api._StringInfo_Length_Get(a);
    return l._api.HEAPU8.subarray(s, s + i);
  }
}
class hr {
  /** @internal */
  constructor(a) {
    this.error = a;
  }
  /**
   * Gets the warning that was raised.
   */
  error;
}
class ae extends Ue {
  _settings;
  _progress;
  _warning;
  constructor(a, s) {
    super(a, l._api._MagickImage_Dispose), this._settings = s;
  }
  get animationDelay() {
    return l._api._MagickImage_AnimationDelay_Get(this._instance);
  }
  set animationDelay(a) {
    l._api._MagickImage_AnimationDelay_Set(this._instance, a);
  }
  get animationIterations() {
    return l._api._MagickImage_AnimationIterations_Get(this._instance);
  }
  set animationIterations(a) {
    l._api._MagickImage_AnimationIterations_Set(this._instance, a);
  }
  get animationTicksPerSecond() {
    return l._api._MagickImage_AnimationTicksPerSecond_Get(this._instance);
  }
  set animationTicksPerSecond(a) {
    l._api._MagickImage_AnimationTicksPerSecond_Set(this._instance, a);
  }
  get artifactNames() {
    const a = [];
    l._api._MagickImage_ResetArtifactIterator(this._instance);
    let s = l._api._MagickImage_GetNextArtifactName(this._instance);
    for (; s !== 0; )
      a.push(l._api.UTF8ToString(s)), s = l._api._MagickImage_GetNextArtifactName(this._instance);
    return a;
  }
  get attributeNames() {
    const a = [];
    l._api._MagickImage_ResetAttributeIterator(this._instance);
    let s = l._api._MagickImage_GetNextAttributeName(this._instance);
    for (; s !== 0; )
      a.push(l._api.UTF8ToString(s)), s = l._api._MagickImage_GetNextAttributeName(this._instance);
    return a;
  }
  get backgroundColor() {
    const a = l._api._MagickImage_BackgroundColor_Get(this._instance);
    return k._create(a);
  }
  set backgroundColor(a) {
    a._use((s) => {
      l._api._MagickImage_BackgroundColor_Set(this._instance, s);
    });
  }
  get baseHeight() {
    return l._api._MagickImage_BaseHeight_Get(this._instance);
  }
  get baseWidth() {
    return l._api._MagickImage_BaseWidth_Get(this._instance);
  }
  get blackPointCompensation() {
    return l._api._MagickImage_BlackPointCompensation_Get(this._instance) === 1;
  }
  set blackPointCompensation(a) {
    l._api._MagickImage_BlackPointCompensation_Set(this._instance, a ? 1 : 0);
  }
  get borderColor() {
    const a = l._api._MagickImage_BorderColor_Get(this._instance);
    return k._create(a);
  }
  set borderColor(a) {
    a._use((s) => {
      l._api._MagickImage_BorderColor_Set(this._instance, s);
    });
  }
  get boundingBox() {
    return this.useExceptionPointer((a) => {
      const s = l._api._MagickImage_BoundingBox_Get(this._instance, a), i = _e._fromRectangle(s);
      return i.width === 0 || i.height === 0 ? null : i;
    });
  }
  get channelCount() {
    return l._api._MagickImage_ChannelCount_Get(this._instance);
  }
  get channels() {
    const a = [];
    return [F.Red, F.Green, F.Blue, F.Black, F.Alpha].forEach((s) => {
      l._api._MagickImage_HasChannel(this._instance, s) && a.push(s);
    }), a;
  }
  get chromaticity() {
    return new ao(
      He._create(l._api._MagickImage_ChromaRed_Get(this._instance)),
      He._create(l._api._MagickImage_ChromaGreen_Get(this._instance)),
      He._create(l._api._MagickImage_ChromaBlue_Get(this._instance)),
      He._create(l._api._MagickImage_ChromaWhite_Get(this._instance))
    );
  }
  set chromaticity(a) {
    a.blue._use((s) => l._api._MagickImage_ChromaBlue_Set(this._instance, s)), a.green._use((s) => l._api._MagickImage_ChromaGreen_Set(this._instance, s)), a.red._use((s) => l._api._MagickImage_ChromaRed_Set(this._instance, s)), a.white._use((s) => l._api._MagickImage_ChromaWhite_Set(this._instance, s));
  }
  get classType() {
    return l._api._MagickImage_ClassType_Get(this._instance);
  }
  set classType(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_ClassType_Set(this._instance, a, s);
    });
  }
  get colorFuzz() {
    return Z._fromQuantum(l._api._MagickImage_ColorFuzz_Get(this._instance));
  }
  set colorFuzz(a) {
    l._api._MagickImage_ColorFuzz_Set(this._instance, a._toQuantum());
  }
  get colormapSize() {
    return l._api._MagickImage_ColormapSize_Get(this._instance);
  }
  set colormapSize(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_ColormapSize_Set(this._instance, a, s);
    });
  }
  get colorSpace() {
    return l._api._MagickImage_ColorSpace_Get(this._instance);
  }
  set colorSpace(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_ColorSpace_Set(this._instance, a, s);
    });
  }
  get colorType() {
    return this.settings.colorType !== void 0 ? this.settings.colorType : l._api._MagickImage_ColorType_Get(this._instance);
  }
  set colorType(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_ColorType_Set(this._instance, a, s);
    });
  }
  get comment() {
    return this.getAttribute("comment");
  }
  set comment(a) {
    a === null ? this.removeAttribute("comment") : this.setAttribute("comment", a);
  }
  get compose() {
    return l._api._MagickImage_Compose_Get(this._instance);
  }
  set compose(a) {
    l._api._MagickImage_Compose_Set(this._instance, a);
  }
  get compression() {
    return l._api._MagickImage_Compression_Get(this._instance);
  }
  get density() {
    return new tt(
      l._api._MagickImage_ResolutionX_Get(this._instance),
      l._api._MagickImage_ResolutionY_Get(this._instance),
      l._api._MagickImage_ResolutionUnits_Get(this._instance)
    );
  }
  set density(a) {
    l._api._MagickImage_ResolutionX_Set(this._instance, a.x), l._api._MagickImage_ResolutionY_Set(this._instance, a.y), l._api._MagickImage_ResolutionUnits_Set(this._instance, a.units);
  }
  get depth() {
    return l._api._MagickImage_Depth_Get(this._instance);
  }
  set depth(a) {
    l._api._MagickImage_Depth_Set(this._instance, a);
  }
  get endian() {
    return l._api._MagickImage_Endian_Get(this._instance);
  }
  set endian(a) {
    l._api._MagickImage_Endian_Set(this._instance, a);
  }
  get fileName() {
    const a = l._api._MagickImage_FileName_Get(this._instance);
    return a === 0 ? null : l._api.UTF8ToString(a);
  }
  get filterType() {
    return l._api._MagickImage_FilterType_Get(this._instance);
  }
  set filterType(a) {
    l._api._MagickImage_FilterType_Set(this._instance, a);
  }
  get format() {
    return he(l._api._MagickImage_Format_Get(this._instance), "");
  }
  set format(a) {
    b(a.toString(), (s) => l._api._MagickImage_Format_Set(this._instance, s));
  }
  get gamma() {
    return l._api._MagickImage_Gamma_Get(this._instance);
  }
  get gifDisposeMethod() {
    return l._api._MagickImage_GifDisposeMethod_Get(this._instance);
  }
  set gifDisposeMethod(a) {
    l._api._MagickImage_GifDisposeMethod_Set(this._instance, a);
  }
  get hasAlpha() {
    return this.toBool(l._api._MagickImage_HasAlpha_Get(this._instance));
  }
  set hasAlpha(a) {
    this.useExceptionPointer((s) => {
      a && this.alpha(ro.Opaque), l._api._MagickImage_HasAlpha_Set(this._instance, this.fromBool(a), s);
    });
  }
  get height() {
    return l._api._MagickImage_Height_Get(this._instance);
  }
  get interlace() {
    return l._api._MagickImage_Interlace_Get(this._instance);
  }
  get isOpaque() {
    return this.useExceptionPointer((a) => this.toBool(l._api._MagickImage_IsOpaque_Get(this._instance, a)));
  }
  get interpolate() {
    return l._api._MagickImage_Interpolate_Get(this._instance);
  }
  set interpolate(a) {
    l._api._MagickImage_Interpolate_Set(this._instance, a);
  }
  get label() {
    return this.getAttribute("label");
  }
  set label(a) {
    a === null ? this.removeAttribute("label") : this.setAttribute("label", a);
  }
  get matteColor() {
    const a = l._api._MagickImage_MatteColor_Get(this._instance);
    return k._create(a);
  }
  set matteColor(a) {
    a._use((s) => {
      l._api._MagickImage_MatteColor_Set(this._instance, s);
    });
  }
  get metaChannelCount() {
    return l._api._MagickImage_MetaChannelCount_Get(this._instance);
  }
  set metaChannelCount(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_MetaChannelCount_Set(this._instance, a, s);
    });
  }
  get orientation() {
    return l._api._MagickImage_Orientation_Get(this._instance);
  }
  set orientation(a) {
    l._api._MagickImage_Orientation_Set(this._instance, a);
  }
  get onProgress() {
    return this._progress;
  }
  set onProgress(a) {
    a !== void 0 ? se.setProgressDelegate(this) : this.disposeProgressDelegate(), this._progress = a;
  }
  get onWarning() {
    return this._warning;
  }
  set onWarning(a) {
    this._warning = a;
  }
  get page() {
    const a = l._api._MagickImage_Page_Get(this._instance);
    return _e._fromRectangle(a);
  }
  set page(a) {
    a._toRectangle((s) => {
      l._api._MagickImage_Page_Set(this._instance, s);
    });
  }
  get profileNames() {
    const a = [];
    l._api._MagickImage_ResetProfileIterator(this._instance);
    let s = l._api._MagickImage_GetNextProfileName(this._instance);
    for (; s !== 0; )
      a.push(l._api.UTF8ToString(s)), s = l._api._MagickImage_GetNextProfileName(this._instance);
    return a;
  }
  get quality() {
    return l._api._MagickImage_Quality_Get(this._instance);
  }
  set quality(a) {
    let s = a < 1 ? 1 : a;
    s = s > 100 ? 100 : s, l._api._MagickImage_Quality_Set(this._instance, s), this._settings._quality = s;
  }
  get renderingIntent() {
    return l._api._MagickImage_RenderingIntent_Get(this._instance);
  }
  set renderingIntent(a) {
    l._api._MagickImage_RenderingIntent_Set(this._instance, a);
  }
  get settings() {
    return this._settings;
  }
  get signature() {
    return this.useExceptionPointer((a) => he(l._api._MagickImage_Signature_Get(this._instance, a)));
  }
  get totalColors() {
    return this.useExceptionPointer((a) => l._api._MagickImage_TotalColors_Get(this._instance, a));
  }
  get virtualPixelMethod() {
    return l._api._MagickImage_VirtualPixelMethod_Get(this._instance);
  }
  set virtualPixelMethod(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_VirtualPixelMethod_Set(this._instance, a, s);
    });
  }
  get width() {
    return l._api._MagickImage_Width_Get(this._instance);
  }
  adaptiveBlur(a, s) {
    const i = this.valueOrDefault(a, 0), g = this.valueOrDefault(s, 1);
    this.useException((m) => {
      const p = l._api._MagickImage_AdaptiveBlur(this._instance, i, g, m.ptr);
      this._setInstance(p, m);
    });
  }
  adaptiveResize(a, s) {
    const i = typeof a == "number" ? new _e(0, 0, a, s) : a;
    this.useException((g) => {
      b(i.toString(), (m) => {
        const p = l._api._MagickImage_AdaptiveResize(this._instance, m, g.ptr);
        this._setInstance(p, g);
      });
    });
  }
  adaptiveSharpen(a, s, i) {
    let g = 0;
    const m = s ?? 1;
    let p = i ?? X.Undefined;
    a !== void 0 && (s === void 0 ? p = a : g = a), this.useException((M) => {
      const I = l._api._MagickImage_AdaptiveSharpen(this._instance, g, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  adaptiveThreshold(a, s, i, g) {
    const m = i instanceof Z ? i._toQuantum() : 0;
    let p = g ?? X.Undefined;
    typeof i == "number" && (p = i), this.useException((M) => {
      const I = l._api._MagickImage_AdaptiveThreshold(this._instance, a, s, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  addNoise(a, s, i) {
    let g = 1, m = i ?? X.Undefined;
    s !== void 0 && (i === void 0 ? m = s : g = s), this.useException((p) => {
      const M = l._api._MagickImage_AddNoise(this._instance, a, g, m, p.ptr);
      this._setInstance(M, p);
    });
  }
  alpha(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_SetAlpha(this._instance, a, s);
    });
  }
  annotate(a, s, i, g) {
    const m = Tt._create(this._settings);
    return this.useExceptionPointer((p) => m._use((M) => {
      b(a, (I) => {
        let R = null, B = de.Undefined, J = 0;
        typeof s == "object" ? (R = s.toString(), i !== void 0 && (B = i), g !== void 0 && (J = g)) : (B = s, i !== void 0 && (J = i)), b(R, (ee) => {
          l._api._MagickImage_Annotate(this._instance, M._instance, I, ee, B, J, p);
        });
      });
    }));
  }
  autoGamma(a) {
    this.useExceptionPointer((s) => {
      const i = this.valueOrDefault(a, X.Composite);
      l._api._MagickImage_AutoGamma(this._instance, i, s);
    });
  }
  autoLevel(a) {
    this.useExceptionPointer((s) => {
      const i = this.valueOrDefault(a, X.Undefined);
      l._api._MagickImage_AutoLevel(this._instance, i, s);
    });
  }
  autoOrient() {
    this.useException((a) => {
      const s = l._api._MagickImage_AutoOrient(this._instance, a.ptr);
      this._setInstance(s, a);
    });
  }
  autoThreshold(a) {
    this.useException((s) => {
      l._api._MagickImage_AutoThreshold(this._instance, a, s.ptr);
    });
  }
  bilateralBlur(a, s, i, g) {
    const m = this.valueOrComputedDefault(i, () => Math.sqrt(a * a + s * s)), p = this.valueOrDefault(g, m * 0.25);
    this.useException((M) => {
      const I = l._api._MagickImage_BilateralBlur(this._instance, a, s, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  blackThreshold(a, s) {
    const i = this.valueOrDefault(s, X.Composite);
    this.useException((g) => {
      b(a.toString(), (m) => {
        l._api._MagickImage_BlackThreshold(this._instance, m, i, g.ptr);
      });
    });
  }
  blueShift(a) {
    const s = this.valueOrDefault(a, 1.5);
    this.useException((i) => {
      const g = l._api._MagickImage_BlueShift(this._instance, s, i.ptr);
      this._setInstance(g, i);
    });
  }
  blur(a, s, i) {
    let g = 0;
    const m = this.valueOrDefault(s, 1);
    let p = this.valueOrDefault(i, X.Undefined);
    a !== void 0 && (s === void 0 ? p = a : g = a), this.useException((M) => {
      const I = l._api._MagickImage_Blur(this._instance, g, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  border(a, s) {
    const i = a, g = this.valueOrDefault(s, a), m = new _e(0, 0, i, g);
    this.useException((p) => {
      m._toRectangle((M) => {
        const I = l._api._MagickImage_Border(this._instance, M, p.ptr);
        this._setInstance(I, p);
      });
    });
  }
  brightnessContrast(a, s, i) {
    const g = this.valueOrDefault(i, X.Undefined);
    this.useException((m) => {
      l._api._MagickImage_BrightnessContrast(this._instance, a.toDouble(), s.toDouble(), g, m.ptr);
    });
  }
  cannyEdge(a, s, i, g) {
    const m = this.valueOrDefault(a, 0), p = this.valueOrDefault(s, 1), M = this.valueOrDefault(i, new Z(10)).toDouble() / 100, I = this.valueOrDefault(g, new Z(30)).toDouble() / 100;
    this.useException((R) => {
      const B = l._api._MagickImage_CannyEdge(this._instance, m, p, M, I, R.ptr);
      this._setInstance(B, R);
    });
  }
  charcoal(a, s) {
    const i = a === void 0 ? 0 : a, g = s === void 0 ? 1 : s;
    this.useException((m) => {
      const p = l._api._MagickImage_Charcoal(this._instance, i, g, m.ptr);
      this._setInstance(p, m);
    });
  }
  chop(a) {
    this.useException((s) => {
      a._toRectangle((i) => {
        const g = l._api._MagickImage_Chop(this._instance, i, s.ptr);
        this._setInstance(g, s);
      });
    });
  }
  clahe(a, s, i, g) {
    this.useExceptionPointer((m) => {
      const p = a instanceof Z ? a.multiply(this.width) : a, M = s instanceof Z ? s.multiply(this.height) : s;
      l._api._MagickImage_Clahe(this._instance, p, M, i, g, m);
    });
  }
  clone(a) {
    return ae._clone(this)._use(a);
  }
  colorAlpha(a) {
    if (!this.hasAlpha)
      return;
    const s = ae.create();
    s.read(a, this.width, this.height), s.composite(this, ti.SrcOver, new De(0, 0)), this._instance = s._instance;
  }
  compare(a, s, i, g) {
    const m = s instanceof _o, p = m ? s.metric : s;
    let M = i;
    g !== void 0 && (M = g);
    let I = X.Undefined;
    if (typeof M != "function")
      return M !== void 0 && (I = M), this.useExceptionPointer((B) => l._api._MagickImage_CompareDistortion(this._instance, a._instance, p, I, B));
    i !== void 0 && typeof i != "function" && (I = i);
    const R = Ce.use(this, (B) => (m && s._setArtifacts(B), li.use((J) => {
      const ee = this.useExceptionPointer((je) => l._api._MagickImage_Compare(this._instance, a._instance, p, I, J.ptr, je)), rt = J.value, xe = ae._createFromImage(ee, this._settings);
      return oi._create(rt, xe);
    })));
    return R.difference._use(() => M(R));
  }
  composite(a, s, i, g, m) {
    let p = 0, M = 0, I = ti.In, R = X.All, B = null;
    s instanceof De ? (p = s.x, M = s.y) : s !== void 0 && (I = s), i instanceof De ? (p = i.x, M = i.y) : typeof i == "string" ? B = i : i !== void 0 && (R = i), typeof g == "string" ? B = g : g !== void 0 && (R = g), m !== void 0 && (R = m), B !== null && this.setArtifact("compose:args", B), this.useExceptionPointer((J) => {
      l._api._MagickImage_Composite(this._instance, a._instance, p, M, I, R, J);
    }), B !== null && this.removeArtifact("compose:args");
  }
  compositeGravity(a, s, i, g, m, p) {
    let M = 0, I = 0, R = ti.In, B = X.All, J = null;
    i instanceof De ? (M = i.x, I = i.y) : i !== void 0 && (R = i), g instanceof De ? (M = g.x, I = g.y) : typeof g == "string" ? J = g : g !== void 0 && (B = g), typeof m == "string" ? J = m : m !== void 0 && (B = m), p !== void 0 && (B = p), J !== null && this.setArtifact("compose:args", J), this.useExceptionPointer((ee) => {
      l._api._MagickImage_CompositeGravity(this._instance, a._instance, s, M, I, R, B, ee);
    }), J !== null && this.removeArtifact("compose:args");
  }
  connectedComponents(a) {
    const s = typeof a == "number" ? new lo(a) : a;
    return Ce.use(this, (g) => (s._setArtifacts(g), this.useException((m) => Ge.use((p) => {
      try {
        const M = l._api._MagickImage_ConnectedComponents(this._instance, s.connectivity, p.ptr, m.ptr);
        return this._setInstance(M, m), _i._create(p.value, this.colormapSize);
      } finally {
        p.value !== 0 && l._api._ConnectedComponent_DisposeList(p.value);
      }
    }))));
  }
  contrast = () => this._contrast(!0);
  contrastStretch(a, s, i) {
    const g = this.width * this.height, m = a.multiply(g);
    let p = 0, M = this.valueOrDefault(i, X.Undefined);
    s instanceof Z ? p = g - s.multiply(g) : (p = g - a.multiply(g), s !== void 0 && (M = s)), this.useExceptionPointer((I) => {
      l._api._MagickImage_ContrastStretch(this._instance, m, p, M, I);
    });
  }
  static create(a, s, i) {
    const g = new ae(ae.createInstance(), new gt());
    return a !== void 0 && g.readOrPing(!1, a, s, i), g;
  }
  crop(a, s, i) {
    let g, m;
    typeof a != "number" ? (g = a, m = this.valueOrDefault(s, de.Undefined)) : s !== void 0 && (g = new _e(a, s), m = this.valueOrDefault(i, de.Undefined)), this.useException((p) => {
      b(g.toString(), (M) => {
        const I = l._api._MagickImage_Crop(this._instance, M, m, p.ptr);
        this._setInstance(I, p);
      });
    });
  }
  cropToTiles(a, s, i) {
    let g, m;
    return typeof a == "number" && typeof s == "number" && i !== void 0 ? (g = new _e(0, 0, a, s), m = i) : typeof a != "number" && typeof s != "number" && (g = a, m = s), this.useException((p) => b(g.toString(), (M) => {
      const I = l._api._MagickImage_CropToTiles(this._instance, M, p.ptr);
      return Pe._createFromImages(I, this._settings)._use(m);
    }));
  }
  deskew(a, s) {
    return Ce.use(this, (i) => {
      s !== void 0 && i.setArtifact("deskew:auto-crop", s), this.useException((m) => {
        const p = l._api._MagickImage_Deskew(this._instance, a._toQuantum(), m.ptr);
        this._setInstance(p, m);
      });
      const g = Number(this.getArtifact("deskew:angle"));
      return isNaN(g) ? 0 : g;
    });
  }
  distort(a, s) {
    Ce.use(this, (i) => {
      let g, m = 0;
      typeof a == "number" ? g = a : (g = a.method, m = a.bestFit ? 1 : 0, a._setArtifacts(i)), this.useException((p) => {
        Sr(s, (M) => {
          const I = l._api._MagickImage_Distort(this._instance, g, m, M, s.length, p.ptr);
          this._setInstance(I, p);
        });
      });
    });
  }
  draw(...a) {
    const s = a.flat();
    s.length !== 0 && Gt._use(this, (i) => {
      i.draw(s);
    });
  }
  evaluate(a, s, i, g) {
    if (typeof s == "number") {
      const m = s, p = typeof i == "number" ? i : i._toQuantum();
      this.useExceptionPointer((M) => {
        l._api._MagickImage_EvaluateOperator(this._instance, a, m, p, M);
      });
    } else if (g !== void 0) {
      if (typeof i != "number")
        throw new U("this should not happen");
      const m = s, p = i, M = typeof g == "number" ? g : g._toQuantum();
      if (m.isPercentage)
        throw new U("percentage is not supported");
      this.useExceptionPointer((I) => {
        gr.use(this, m, (R) => {
          l._api._MagickImage_EvaluateGeometry(this._instance, a, R, p, M, I);
        });
      });
    }
  }
  extent(a, s, i) {
    let g = de.Undefined, m;
    typeof a != "number" ? m = a : typeof s == "number" && (m = new _e(a, s)), typeof s == "number" ? g = s : s !== void 0 && (this.backgroundColor = s), typeof i == "number" ? g = i : i !== void 0 && (this.backgroundColor = i), this.useException((p) => {
      b(m.toString(), (M) => {
        const I = l._api._MagickImage_Extent(this._instance, M, g, p.ptr);
        this._setInstance(I, p);
      });
    });
  }
  flip() {
    this.useException((a) => {
      const s = l._api._MagickImage_Flip(this._instance, a.ptr);
      this._setInstance(s, a);
    });
  }
  flop() {
    this.useException((a) => {
      const s = l._api._MagickImage_Flop(this._instance, a.ptr);
      this._setInstance(s, a);
    });
  }
  /**
   * Formats the specified expression (more info can be found here: https://imagemagick.org/script/escape.php).
   * @param expression The expression.
   */
  formatExpression(a) {
    return this.useExceptionPointer((s) => this._settings._use((i) => b(a, (g) => {
      const m = l._api._MagickImage_FormatExpression(this._instance, i._instance, g, s);
      return co(l._api, m);
    })));
  }
  gammaCorrect(a, s) {
    const i = this.valueOrDefault(s, X.Undefined);
    this.useExceptionPointer((g) => {
      l._api._MagickImage_GammaCorrect(this._instance, a, i, g);
    });
  }
  gaussianBlur(a, s, i) {
    const g = this.valueOrDefault(s, 1), m = this.valueOrDefault(i, X.Undefined);
    this.useException((p) => {
      const M = l._api._MagickImage_GaussianBlur(this._instance, a, g, m, p.ptr);
      this._setInstance(M, p);
    });
  }
  getArtifact(a) {
    return b(a, (s) => {
      const i = l._api._MagickImage_GetArtifact(this._instance, s);
      return he(i);
    });
  }
  getAttribute(a) {
    return this.useException((s) => b(a, (i) => {
      const g = l._api._MagickImage_GetAttribute(this._instance, i, s.ptr);
      return he(g);
    }));
  }
  getColorProfile() {
    const a = ["icc", "icm"];
    for (const s of a) {
      const i = this._getProfile(s);
      if (i !== null)
        return new oo(i);
    }
    return null;
  }
  getPixels(a) {
    if (this._settings._ping)
      throw new U("image contains no pixel data");
    return it._use(this, a);
  }
  getProfile(a) {
    const s = this._getProfile(a);
    return s === null ? null : new mr(a, s);
  }
  getWriteMask(a) {
    const s = this.useExceptionPointer((g) => l._api._MagickImage_GetWriteMask(this._instance, g)), i = s === 0 ? null : new ae(s, new gt());
    return i == null ? a(i) : i._use(a);
  }
  grayscale(a = po.Undefined) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_Grayscale(this._instance, a, s);
    });
  }
  hasProfile(a) {
    return b(a, (s) => this.toBool(l._api._MagickImage_HasProfile(this._instance, s)));
  }
  histogram() {
    const a = /* @__PURE__ */ new Map();
    return this.useExceptionPointer((s) => {
      Ge.use((i) => {
        const g = l._api._MagickImage_Histogram(this._instance, i.ptr, s);
        if (g !== 0) {
          const m = i.value;
          for (let p = 0; p < m; p++) {
            const M = l._api._MagickColorCollection_GetInstance(g, p), I = k._create(M), R = l._api._MagickColor_Count_Get(M);
            a.set(I.toString(), R);
          }
          l._api._MagickColorCollection_DisposeList(g);
        }
      });
    }), a;
  }
  inverseContrast = () => this._contrast(!1);
  inverseLevel(a, s, i, g) {
    const m = this.valueOrDefault(i, 1), p = this.valueOrDefault(g, X.Composite);
    this.useExceptionPointer((M) => {
      l._api._MagickImage_InverseLevel(this._instance, a.toDouble(), s._toQuantum(), m, p, M);
    });
  }
  inverseOpaque = (a, s) => this._opaque(a, s, !0);
  inverseSigmoidalContrast(a, s, i) {
    this._sigmoidalContrast(!1, a, s, i);
  }
  inverseTransparent = (a) => this._transparent(a, !0);
  level(a, s, i, g) {
    const m = this.valueOrDefault(i, 1), p = this.valueOrDefault(g, X.Composite);
    this.useExceptionPointer((M) => {
      l._api._MagickImage_Level(this._instance, a.toDouble(), s._toQuantum(), m, p, M);
    });
  }
  linearStretch(a, s) {
    this.useExceptionPointer((i) => {
      l._api._MagickImage_LinearStretch(this._instance, a.toDouble(), s._toQuantum(), i);
    });
  }
  liquidRescale(a, s) {
    const i = typeof a == "number" ? new _e(a, s) : a;
    this.useException((g) => {
      b(i.toString(), (m) => {
        const p = l._api._MagickImage_LiquidRescale(this._instance, m, i.x, i.y, g.ptr);
        this._setInstance(p, g);
      });
    });
  }
  negate(a) {
    this.useExceptionPointer((s) => {
      const i = this.valueOrDefault(a, X.Undefined);
      l._api._MagickImage_Negate(this._instance, 0, i, s);
    });
  }
  negateGrayScale(a) {
    this.useExceptionPointer((s) => {
      const i = this.valueOrDefault(a, X.Undefined);
      l._api._MagickImage_Negate(this._instance, 1, i, s);
    });
  }
  normalize() {
    this.useExceptionPointer((a) => {
      l._api._MagickImage_Normalize(this._instance, a);
    });
  }
  modulate(a, s, i) {
    const g = this.valueOrDefault(s, new Z(100)), m = this.valueOrDefault(i, new Z(100));
    this.useExceptionPointer((p) => {
      const M = `${a.toDouble()}/${g.toDouble()}/${m.toDouble()}`;
      b(M, (I) => {
        l._api._MagickImage_Modulate(this._instance, I, p);
      });
    });
  }
  morphology(a) {
    this.useException((s) => {
      b(a.kernel, (i) => {
        const g = l._api._MagickImage_Morphology(this._instance, a.method, i, a.channels, a.iterations, s.ptr);
        this._setInstance(g, s);
      });
    });
  }
  motionBlur(a, s, i) {
    this.useException((g) => {
      const m = l._api._MagickImage_MotionBlur(this._instance, a, s, i, g.ptr);
      this._setInstance(m, g);
    });
  }
  oilPaint(a) {
    const s = this.valueOrDefault(a, 3), i = 0;
    this.useException((g) => {
      const m = l._api._MagickImage_OilPaint(this._instance, s, i, g.ptr);
      this._setInstance(m, g);
    });
  }
  opaque = (a, s) => this._opaque(a, s, !1);
  ping(a, s) {
    this.readOrPing(!0, a, s);
  }
  perceptualHash(a) {
    const s = this.valueOrDefault(a, fe._defaultColorspaces());
    return fe._validateColorSpaces(s), Ce.use(this, (i) => {
      const g = s.map((m) => _r[m]).join(",");
      return i.setArtifact("phash:colorspaces", g), this.useExceptionPointer((m) => {
        const p = l._api._MagickImage_PerceptualHash(this._instance, m);
        return fe._create(this, s, p);
      });
    });
  }
  quantize(a) {
    const s = this.valueOrDefault(a, new ai());
    return this.useException((i) => {
      s._use((g) => {
        l._api._MagickImage_Quantize(this._instance, g._instance, i.ptr);
      });
    }), s.measureErrors ? bt._create(this) : null;
  }
  read(a, s, i) {
    this.readOrPing(!1, a, s, i);
  }
  readFromCanvas(a, s) {
    const i = a.getContext("2d", s);
    if (i === null)
      return;
    const g = i.getImageData(0, 0, a.width, a.height), m = new Ee();
    m.format = Re.Rgba, m.width = a.width, m.height = a.height, this.useException((p) => {
      this.readFromArray(g.data, m, p);
    });
  }
  removeArtifact(a) {
    b(a, (s) => {
      l._api._MagickImage_RemoveArtifact(this._instance, s);
    });
  }
  removeAttribute(a) {
    b(a, (s) => {
      l._api._MagickImage_RemoveAttribute(this._instance, s);
    });
  }
  removeProfile(a) {
    const s = typeof a == "string" ? a : a.name;
    b(s, (i) => {
      l._api._MagickImage_RemoveProfile(this._instance, i);
    });
  }
  removeWriteMask() {
    this.useExceptionPointer((a) => {
      l._api._MagickImage_SetWriteMask(this._instance, 0, a);
    });
  }
  resetPage() {
    this.page = new _e(0, 0, 0, 0);
  }
  resize(a, s) {
    const i = typeof a == "number" ? new _e(a, s) : a;
    this.useException((g) => {
      b(i.toString(), (m) => {
        const p = l._api._MagickImage_Resize(this._instance, m, g.ptr);
        this._setInstance(p, g);
      });
    });
  }
  rotate(a) {
    this.useException((s) => {
      const i = l._api._MagickImage_Rotate(this._instance, a, s.ptr);
      this._setInstance(i, s);
    });
  }
  separate(a, s) {
    return this.useException((i) => {
      let g, m = X.Undefined;
      if (typeof a == "number" && s !== void 0)
        m = a, g = s;
      else if (typeof a == "function")
        g = a;
      else
        throw new U("invalid arguments");
      const p = l._api._MagickImage_Separate(this._instance, m, i.ptr);
      return Pe._createFromImages(p, this._settings)._use(g);
    });
  }
  sepiaTone(a = new Z(80)) {
    this.useException((s) => {
      const i = typeof a == "number" ? new Z(a) : a, g = l._api._MagickImage_SepiaTone(this._instance, i._toQuantum(), s.ptr);
      this._setInstance(g, s);
    });
  }
  setArtifact(a, s) {
    let i;
    typeof s == "string" ? i = s : typeof s == "boolean" ? i = this.fromBool(s).toString() : i = s.toString(), b(a, (g) => {
      b(i, (m) => {
        l._api._MagickImage_SetArtifact(this._instance, g, m);
      });
    });
  }
  setAttribute(a, s) {
    this.useException((i) => {
      b(a, (g) => {
        b(s, (m) => {
          l._api._MagickImage_SetAttribute(this._instance, g, m, i.ptr);
        });
      });
    });
  }
  setProfile(a, s) {
    const i = typeof a == "string" ? a : a.name;
    let g;
    s !== void 0 ? g = s : typeof a != "string" && (g = a.data), this.useException((m) => {
      b(i, (p) => {
        lr(g, (M) => {
          l._api._MagickImage_SetProfile(this._instance, p, M, g.byteLength, m.ptr);
        });
      });
    });
  }
  setWriteMask(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_SetWriteMask(this._instance, a._instance, s);
    });
  }
  sharpen(a, s, i) {
    const g = this.valueOrDefault(a, 0), m = this.valueOrDefault(s, 1), p = this.valueOrDefault(i, X.Undefined);
    this.useException((M) => {
      const I = l._api._MagickImage_Sharpen(this._instance, g, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  shave(a, s) {
    this.useException((i) => {
      const g = l._api._MagickImage_Shave(this._instance, a, s, i.ptr);
      this._setInstance(g, i);
    });
  }
  sigmoidalContrast(a, s, i) {
    this._sigmoidalContrast(!0, a, s, i);
  }
  solarize(a = new Z(50)) {
    this.useException((s) => {
      const i = typeof a == "number" ? new Z(a) : a;
      l._api._MagickImage_Solarize(this._instance, i._toQuantum(), s.ptr);
    });
  }
  splice(a) {
    gr.use(this, a, (s) => {
      this.useException((i) => {
        const g = l._api._MagickImage_Splice(this._instance, s, i.ptr);
        this._setInstance(g, i);
      });
    });
  }
  statistics(a) {
    const s = this.valueOrDefault(a, X.All);
    return this.useExceptionPointer((i) => {
      const g = l._api._MagickImage_Statistics(this._instance, s, i), m = gi._create(this, g, s);
      return l._api._Statistics_DisposeList(g), m;
    });
  }
  strip() {
    this.useExceptionPointer((a) => {
      l._api._MagickImage_Strip(this._instance, a);
    });
  }
  transformColorSpace(a, s, i) {
    const g = a;
    let m, p = cr.Quantum;
    s !== void 0 && (typeof s == "number" ? p = s : m = s), i !== void 0 && (p = i);
    const M = this.hasProfile("icc") || this.hasProfile("icm");
    if (m === void 0) {
      if (!M)
        return !1;
      m = g;
    } else {
      if (g.colorSpace !== this.colorSpace)
        return !1;
      M || this.setProfile(g);
    }
    return p === cr.Quantum ? Ce.use(this, (I) => {
      I.setArtifact("profile:highres-transform", !1), this.setProfile(m);
    }) : this.setProfile(m), !0;
  }
  threshold(a, s) {
    const i = this.valueOrDefault(s, X.Undefined);
    this.useExceptionPointer((g) => {
      l._api._MagickImage_Threshold(this._instance, a._toQuantum(), i, g);
    });
  }
  thumbnail(a, s) {
    const i = typeof a == "number" ? new _e(a, s) : a;
    this.useException((g) => {
      b(i.toString(), (m) => {
        const p = l._api._MagickImage_Thumbnail(this._instance, m, g.ptr);
        this._setInstance(p, g);
      });
    });
  }
  toString = () => `${this.format} ${this.width}x${this.height} ${this.depth}-bit ${_r[this.colorSpace]}`;
  transparent(a) {
    a._use((s) => {
      this.useExceptionPointer((i) => {
        l._api._MagickImage_Transparent(this._instance, s, 0, i);
      });
    });
  }
  trim(...a) {
    if (a.length > 0)
      if (a.length == 1 && a[0] instanceof Z) {
        const s = a[0];
        this.setArtifact("trim:percent-background", s.toDouble().toString());
      } else {
        const s = a, i = [...new Set(uo(s))].join(",");
        this.setArtifact("trim:edges", i);
      }
    this.useException((s) => {
      const i = l._api._MagickImage_Trim(this._instance, s.ptr);
      this._setInstance(i, s), this.removeArtifact("trim:edges"), this.removeArtifact("trim:percent-background");
    });
  }
  wave(a, s, i) {
    const g = this.valueOrDefault(a, this.interpolate), m = this.valueOrDefault(s, 25), p = this.valueOrDefault(i, 150);
    this.useException((M) => {
      const I = l._api._MagickImage_Wave(this._instance, g, m, p, M.ptr);
      this._setInstance(I, M);
    });
  }
  vignette(a, s, i, g) {
    const m = this.valueOrDefault(a, 0), p = this.valueOrDefault(s, 1), M = this.valueOrDefault(i, 0), I = this.valueOrDefault(g, 0);
    this.useException((R) => {
      const B = l._api._MagickImage_Vignette(this._instance, m, p, M, I, R.ptr);
      this._setInstance(B, R);
    });
  }
  whiteThreshold(a, s) {
    const i = this.valueOrDefault(s, X.Composite);
    this.useException((g) => {
      b(a.toString(), (m) => {
        l._api._MagickImage_WhiteThreshold(this._instance, m, i, g.ptr);
      });
    });
  }
  write(a, s) {
    let i = 0, g = 0;
    s !== void 0 ? this._settings.format = a : s = a, this.useException((p) => {
      Ge.use((M) => {
        this._settings._use((I) => {
          try {
            i = l._api._MagickImage_WriteBlob(this._instance, I._instance, M.ptr, p.ptr), g = M.value;
          } catch {
            i !== 0 && (i = l._api._MagickMemory_Relinquish(i));
          }
        });
      });
    });
    const m = new pr(i, g, s);
    return ce._disposeAfterExecution(m, m.func);
  }
  writeToCanvas(a, s) {
    a.width = this.width, a.height = this.height;
    const i = a.getContext("2d", s);
    i !== null && it._map(this, "RGBA", (g) => {
      const m = i.createImageData(this.width, this.height);
      let p = 0;
      for (let M = 0; M < this.height; M++)
        for (let I = 0; I < this.width; I++)
          m.data[p++] = l._api.HEAPU8[g++], m.data[p++] = l._api.HEAPU8[g++], m.data[p++] = l._api.HEAPU8[g++], m.data[p++] = l._api.HEAPU8[g++];
      i.putImageData(m, 0, 0);
    });
  }
  /** @internal */
  static _createFromImage(a, s) {
    return new ae(a, s);
  }
  /** @internal */
  _channelOffset(a) {
    return l._api._MagickImage_HasChannel(this._instance, a) ? l._api._MagickImage_ChannelOffset(this._instance, a) : -1;
  }
  /** @internal */
  static _clone(a) {
    return T.usePointer((s) => new ae(l._api._MagickImage_Clone(a._instance, s), a._settings._clone()));
  }
  /** @internal */
  _getSettings() {
    return this._settings;
  }
  /** @internal */
  _instanceNotInitialized() {
    throw new U("no image has been read");
  }
  /** @internal */
  _setInstance(a, s) {
    if (super._setInstance(a, s) === !0 || a === 0 && this.onProgress !== void 0)
      return !0;
    throw new U("out of memory");
  }
  _use(a) {
    return ce._disposeAfterExecution(this, a);
  }
  static _create(a) {
    return ae.create()._use(a);
  }
  onDispose() {
    this.disposeProgressDelegate();
  }
  _contrast(a) {
    this.useExceptionPointer((s) => {
      l._api._MagickImage_Contrast(this._instance, this.fromBool(a), s);
    });
  }
  _getProfile(a) {
    return b(a, (s) => {
      const i = l._api._MagickImage_GetProfile(this._instance, s), g = Mo.toArray(i);
      return g === null ? null : g;
    });
  }
  _opaque(a, s, i) {
    this.useExceptionPointer((g) => {
      a._use((m) => {
        s._use((p) => {
          l._api._MagickImage_Opaque(this._instance, m, p, this.fromBool(i), g);
        });
      });
    });
  }
  _sigmoidalContrast(a, s, i, g) {
    let m;
    i !== void 0 ? typeof i == "number" ? m = i : m = i.multiply($e.max) : m = $e.max * 0.5;
    const p = this.valueOrDefault(g, X.Undefined);
    this.useExceptionPointer((M) => {
      l._api._MagickImage_SigmoidalContrast(this._instance, this.fromBool(a), s, m, p, M);
    });
  }
  _transparent(a, s) {
    a._use((i) => {
      this.useExceptionPointer((g) => {
        l._api._MagickImage_Transparent(this._instance, i, this.fromBool(s), g);
      });
    });
  }
  static createInstance() {
    return T.usePointer((a) => l._api._MagickImage_Create(0, a));
  }
  fromBool(a) {
    return a ? 1 : 0;
  }
  disposeProgressDelegate() {
    se.removeProgressDelegate(this), this._progress = void 0;
  }
  readOrPing(a, s, i, g) {
    this.useException((m) => {
      const p = i instanceof Ee ? i : new Ee(this._settings);
      if (p._ping = a, this._settings._ping = a, p.frameCount !== void 0 && p.frameCount > 1)
        throw new U("The frame count can only be set to 1 when a single image is being read.");
      if (typeof s == "string")
        p._fileName = s;
      else if (dr(s)) {
        this.readFromArray(s, p, m);
        return;
      } else
        p._fileName = "xc:" + s.toShortString(), p.width = typeof i == "number" ? i : 0, p.height = typeof g == "number" ? g : 0;
      p._use((M) => {
        const I = l._api._MagickImage_ReadFile(M._instance, m.ptr);
        this._setInstance(I, m);
      });
    });
  }
  readFromArray(a, s, i) {
    s._use((g) => {
      lr(a, (m) => {
        const p = l._api._MagickImage_ReadBlob(g._instance, m, 0, a.byteLength, i.ptr);
        this._setInstance(p, i);
      });
    });
  }
  toBool(a) {
    return a === 1;
  }
  valueOrDefault(a, s) {
    return a === void 0 ? s : a;
  }
  valueOrComputedDefault(a, s) {
    return a === void 0 ? s() : a;
  }
  useException(a) {
    return T.use(a, (s) => {
      this.onWarning !== void 0 && this.onWarning(new hr(s));
    });
  }
  useExceptionPointer(a) {
    return T.usePointer(a, (s) => {
      this.onWarning !== void 0 && this.onWarning(new hr(s));
    });
  }
}
var ko = (() => {
  var S = typeof document < "u" ? document.currentScript?.src : void 0;
  return function(a = {}) {
    var s, i = a, g, m, p = new Promise((e, t) => {
      g = e, m = t;
    }), M = typeof window == "object", I = typeof WorkerGlobalScope < "u";
    typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer", (!globalThis.crypto || !globalThis.crypto.getRandomValues) && (globalThis.crypto = { getRandomValues: (e) => {
      for (let t = 0; t < e.length; t++) e[t] = Math.random() * 256 | 0;
    } });
    var R = Object.assign({}, i), B = "./this.program", J = (e, t) => {
      throw t;
    }, ee = "";
    function rt(e) {
      return i.locateFile ? i.locateFile(e, ee) : ee + e;
    }
    var xe, je;
    (M || I) && (I ? ee = self.location.href : typeof document < "u" && document.currentScript && (ee = document.currentScript.src), S && (ee = S), ee.startsWith("blob:") ? ee = "" : ee = ee.substr(0, ee.replace(/[?#].*/, "").lastIndexOf("/") + 1), I && (je = (e) => {
      var t = new XMLHttpRequest();
      return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
    }), xe = async (e) => {
      if (ki(e))
        return new Promise((r, n) => {
          var _ = new XMLHttpRequest();
          _.open("GET", e, !0), _.responseType = "arraybuffer", _.onload = () => {
            if (_.status == 200 || _.status == 0 && _.response) {
              r(_.response);
              return;
            }
            n(_.status);
          }, _.onerror = n, _.send(null);
        });
      var t = await fetch(e, { credentials: "same-origin" });
      if (t.ok)
        return t.arrayBuffer();
      throw new Error(t.status + " : " + t.url);
    });
    var At = i.print || console.log.bind(console), be = i.printErr || console.error.bind(console);
    Object.assign(i, R), R = null, i.arguments && i.arguments, i.thisProgram && (B = i.thisProgram);
    var ht = i.wasmBinary, dt, Rt = !1, V, ne, le, at, P, L, mt, oe, ui, pt;
    function hi() {
      var e = dt.buffer;
      i.HEAP8 = V = new Int8Array(e), i.HEAP16 = le = new Int16Array(e), i.HEAPU8 = ne = new Uint8Array(e), i.HEAPU16 = at = new Uint16Array(e), i.HEAP32 = P = new Int32Array(e), i.HEAPU32 = L = new Uint32Array(e), i.HEAPF32 = mt = new Float32Array(e), i.HEAPF64 = pt = new Float64Array(e), i.HEAP64 = oe = new BigInt64Array(e), i.HEAPU64 = ui = new BigUint64Array(e);
    }
    var di = [], mi = [], pi = [];
    function wr() {
      if (i.preRun)
        for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; )
          Cr(i.preRun.shift());
      Lt(di);
    }
    function Ir() {
      !i.noFSInit && !u.initialized && u.init(), u.ignorePermissions = !1, Lt(mi);
    }
    function yr() {
      if (i.postRun)
        for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; )
          Pr(i.postRun.shift());
      Lt(pi);
    }
    function Cr(e) {
      di.unshift(e);
    }
    function Dr(e) {
      mi.unshift(e);
    }
    function Pr(e) {
      pi.unshift(e);
    }
    var Fe = 0, nt = null;
    function fi(e) {
      Fe++, i.monitorRunDependencies?.(Fe);
    }
    function xt(e) {
      if (Fe--, i.monitorRunDependencies?.(Fe), Fe == 0 && nt) {
        var t = nt;
        nt = null, t();
      }
    }
    function Ye(e) {
      i.onAbort?.(e), e = "Aborted(" + e + ")", be(e), Rt = !0, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw m(t), t;
    }
    var Er = "data:application/octet-stream;base64,", Mi = (e) => e.startsWith(Er), ki = (e) => e.startsWith("file://");
    function Tr() {
      var e = "magick.wasm";
      return Mi(e) ? e : rt(e);
    }
    var Ft;
    function Gr(e) {
      if (e == Ft && ht)
        return new Uint8Array(ht);
      if (je)
        return je(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function br(e) {
      if (!ht)
        try {
          var t = await xe(e);
          return new Uint8Array(t);
        } catch {
        }
      return Gr(e);
    }
    async function Ar(e, t) {
      try {
        var r = await br(e), n = await WebAssembly.instantiate(r, t);
        return n;
      } catch (_) {
        be(`failed to asynchronously prepare wasm: ${_}`), Ye(_);
      }
    }
    async function Rr(e, t, r) {
      if (!e && typeof WebAssembly.instantiateStreaming == "function" && !Mi(t) && !ki(t) && typeof fetch == "function")
        try {
          var n = fetch(t, { credentials: "same-origin" }), _ = await WebAssembly.instantiateStreaming(n, r);
          return _;
        } catch (c) {
          be(`wasm streaming compile failed: ${c}`), be("falling back to ArrayBuffer instantiation");
        }
      return Ar(t, r);
    }
    function xr() {
      return { a: Ms };
    }
    async function Fr() {
      function e(_, c) {
        return o = _.exports, o = Os(o), dt = o.ab, hi(), Le = o.vb, Dr(o.bb), xt(), o;
      }
      fi();
      function t(_) {
        e(_.instance);
      }
      var r = xr();
      if (i.instantiateWasm)
        try {
          return i.instantiateWasm(r, e);
        } catch (_) {
          be(`Module.instantiateWasm callback failed with error: ${_}`), m(_);
        }
      Ft ??= Tr();
      try {
        var n = await Rr(ht, Ft, r);
        return t(n), n;
      } catch (_) {
        m(_);
        return;
      }
    }
    class Lr {
      name = "ExitStatus";
      constructor(t) {
        this.message = `Program terminated with exit(${t})`, this.status = t;
      }
    }
    var Lt = (e) => {
      for (; e.length > 0; )
        e.shift()(i);
    };
    function Wr(e, t = "i8") {
      switch (t.endsWith("*") && (t = "*"), t) {
        case "i1":
          return V[e >>> 0];
        case "i8":
          return V[e >>> 0];
        case "i16":
          return le[e >>> 1 >>> 0];
        case "i32":
          return P[e >>> 2 >>> 0];
        case "i64":
          return oe[e >>> 3];
        case "float":
          return mt[e >>> 2 >>> 0];
        case "double":
          return pt[e >>> 3 >>> 0];
        case "*":
          return L[e >>> 2 >>> 0];
        default:
          Ye(`invalid type for getValue: ${t}`);
      }
    }
    var Si = i.noExitRuntime || !0;
    function Br(e, t, r = "i8") {
      switch (r.endsWith("*") && (r = "*"), r) {
        case "i1":
          V[e >>> 0] = t;
          break;
        case "i8":
          V[e >>> 0] = t;
          break;
        case "i16":
          le[e >>> 1 >>> 0] = t;
          break;
        case "i32":
          P[e >>> 2 >>> 0] = t;
          break;
        case "i64":
          oe[e >>> 3] = BigInt(t);
          break;
        case "float":
          mt[e >>> 2 >>> 0] = t;
          break;
        case "double":
          pt[e >>> 3 >>> 0] = t;
          break;
        case "*":
          L[e >>> 2 >>> 0] = t;
          break;
        default:
          Ye(`invalid type for setValue: ${r}`);
      }
    }
    var N = (e) => tr(e), H = () => ir(), zr = 9007199254740992, Nr = -9007199254740992, Me = (e) => e < Nr || e > zr ? NaN : Number(e), st = [], Le, W = (e) => {
      var t = st[e];
      return t || (e >= st.length && (st.length = e + 1), st[e] = t = Le.get(e)), t;
    };
    function Hr(e, t) {
      return e >>>= 0, W(e)(t);
    }
    var Ve = 0;
    class vi {
      constructor(t) {
        this.excPtr = t, this.ptr = t - 24;
      }
      set_type(t) {
        L[this.ptr + 4 >>> 2 >>> 0] = t;
      }
      get_type() {
        return L[this.ptr + 4 >>> 2 >>> 0];
      }
      set_destructor(t) {
        L[this.ptr + 8 >>> 2 >>> 0] = t;
      }
      get_destructor() {
        return L[this.ptr + 8 >>> 2 >>> 0];
      }
      set_caught(t) {
        t = t ? 1 : 0, V[this.ptr + 12 >>> 0] = t;
      }
      get_caught() {
        return V[this.ptr + 12 >>> 0] != 0;
      }
      set_rethrown(t) {
        t = t ? 1 : 0, V[this.ptr + 13 >>> 0] = t;
      }
      get_rethrown() {
        return V[this.ptr + 13 >>> 0] != 0;
      }
      init(t, r) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
      }
      set_adjusted_ptr(t) {
        L[this.ptr + 16 >>> 2 >>> 0] = t;
      }
      get_adjusted_ptr() {
        return L[this.ptr + 16 >>> 2 >>> 0];
      }
    }
    function $r(e) {
      throw e >>>= 0, Ve || (Ve = e), Ve;
    }
    var ft = (e) => er(e), Ur = (e) => {
      var t = Ve;
      if (!t)
        return ft(0), 0;
      var r = new vi(t);
      r.set_adjusted_ptr(t);
      var n = r.get_type();
      if (!n)
        return ft(0), t;
      for (var _ of e) {
        if (_ === 0 || _ === n)
          break;
        var c = r.ptr + 16;
        if (rr(_, n, c))
          return ft(_), t;
      }
      return ft(n), t;
    };
    function jr() {
      return Ur([]);
    }
    function Yr(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = new vi(e);
      throw n.init(t, r), Ve = e, Ve;
    }
    var j = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
      var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return t.exec(e).slice(1);
    }, normalizeArray: (e, t) => {
      for (var r = 0, n = e.length - 1; n >= 0; n--) {
        var _ = e[n];
        _ === "." ? e.splice(n, 1) : _ === ".." ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
      }
      if (t)
        for (; r; r--)
          e.unshift("..");
      return e;
    }, normalize: (e) => {
      var t = j.isAbs(e), r = e.substr(-1) === "/";
      return e = j.normalizeArray(e.split("/").filter((n) => !!n), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
    }, dirname: (e) => {
      var t = j.splitPath(e), r = t[0], n = t[1];
      return !r && !n ? "." : (n && (n = n.substr(0, n.length - 1)), r + n);
    }, basename: (e) => {
      if (e === "/") return "/";
      e = j.normalize(e), e = e.replace(/\/$/, "");
      var t = e.lastIndexOf("/");
      return t === -1 ? e : e.substr(t + 1);
    }, join: (...e) => j.normalize(e.join("/")), join2: (e, t) => j.normalize(e + "/" + t) }, Vr = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
        return (e) => crypto.getRandomValues(e);
      Ye("initRandomDevice");
    }, Wt = (e) => (Wt = Vr())(e), Xe = { resolve: (...e) => {
      for (var t = "", r = !1, n = e.length - 1; n >= -1 && !r; n--) {
        var _ = n >= 0 ? e[n] : u.cwd();
        if (typeof _ != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!_)
          return "";
        t = _ + "/" + t, r = j.isAbs(_);
      }
      return t = j.normalizeArray(t.split("/").filter((c) => !!c), !r).join("/"), (r ? "/" : "") + t || ".";
    }, relative: (e, t) => {
      e = Xe.resolve(e).substr(1), t = Xe.resolve(t).substr(1);
      function r(v) {
        for (var w = 0; w < v.length && v[w] === ""; w++)
          ;
        for (var y = v.length - 1; y >= 0 && v[y] === ""; y--)
          ;
        return w > y ? [] : v.slice(w, y - w + 1);
      }
      for (var n = r(e.split("/")), _ = r(t.split("/")), c = Math.min(n.length, _.length), h = c, d = 0; d < c; d++)
        if (n[d] !== _[d]) {
          h = d;
          break;
        }
      for (var f = [], d = h; d < n.length; d++)
        f.push("..");
      return f = f.concat(_.slice(h)), f.join("/");
    } }, wi = typeof TextDecoder < "u" ? new TextDecoder() : void 0, qe = (e, t = 0, r = NaN) => {
      t >>>= 0;
      for (var n = t + r, _ = t; e[_] && !(_ >= n); ) ++_;
      if (_ - t > 16 && e.buffer && wi)
        return wi.decode(e.subarray(t, _));
      for (var c = ""; t < _; ) {
        var h = e[t++];
        if (!(h & 128)) {
          c += String.fromCharCode(h);
          continue;
        }
        var d = e[t++] & 63;
        if ((h & 224) == 192) {
          c += String.fromCharCode((h & 31) << 6 | d);
          continue;
        }
        var f = e[t++] & 63;
        if ((h & 240) == 224 ? h = (h & 15) << 12 | d << 6 | f : h = (h & 7) << 18 | d << 12 | f << 6 | e[t++] & 63, h < 65536)
          c += String.fromCharCode(h);
        else {
          var v = h - 65536;
          c += String.fromCharCode(55296 | v >> 10, 56320 | v & 1023);
        }
      }
      return c;
    }, Bt = [], Qe = (e) => {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
      }
      return t;
    }, zt = (e, t, r, n) => {
      if (r >>>= 0, !(n > 0)) return 0;
      for (var _ = r, c = r + n - 1, h = 0; h < e.length; ++h) {
        var d = e.charCodeAt(h);
        if (d >= 55296 && d <= 57343) {
          var f = e.charCodeAt(++h);
          d = 65536 + ((d & 1023) << 10) | f & 1023;
        }
        if (d <= 127) {
          if (r >= c) break;
          t[r++ >>> 0] = d;
        } else if (d <= 2047) {
          if (r + 1 >= c) break;
          t[r++ >>> 0] = 192 | d >> 6, t[r++ >>> 0] = 128 | d & 63;
        } else if (d <= 65535) {
          if (r + 2 >= c) break;
          t[r++ >>> 0] = 224 | d >> 12, t[r++ >>> 0] = 128 | d >> 6 & 63, t[r++ >>> 0] = 128 | d & 63;
        } else {
          if (r + 3 >= c) break;
          t[r++ >>> 0] = 240 | d >> 18, t[r++ >>> 0] = 128 | d >> 12 & 63, t[r++ >>> 0] = 128 | d >> 6 & 63, t[r++ >>> 0] = 128 | d & 63;
        }
      }
      return t[r >>> 0] = 0, r - _;
    };
    function Ii(e, t, r) {
      var n = Qe(e) + 1, _ = new Array(n), c = zt(e, _, 0, _.length);
      return _.length = c, _;
    }
    var Xr = () => {
      if (!Bt.length) {
        var e = null;
        if (typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`)), !e)
          return null;
        Bt = Ii(e);
      }
      return Bt.shift();
    }, We = { ttys: [], init() {
    }, shutdown() {
    }, register(e, t) {
      We.ttys[e] = { input: [], output: [], ops: t }, u.registerDevice(e, We.stream_ops);
    }, stream_ops: { open(e) {
      var t = We.ttys[e.node.rdev];
      if (!t)
        throw new u.ErrnoError(43);
      e.tty = t, e.seekable = !1;
    }, close(e) {
      e.tty.ops.fsync(e.tty);
    }, fsync(e) {
      e.tty.ops.fsync(e.tty);
    }, read(e, t, r, n, _) {
      if (!e.tty || !e.tty.ops.get_char)
        throw new u.ErrnoError(60);
      for (var c = 0, h = 0; h < n; h++) {
        var d;
        try {
          d = e.tty.ops.get_char(e.tty);
        } catch {
          throw new u.ErrnoError(29);
        }
        if (d === void 0 && c === 0)
          throw new u.ErrnoError(6);
        if (d == null) break;
        c++, t[r + h] = d;
      }
      return c && (e.node.atime = Date.now()), c;
    }, write(e, t, r, n, _) {
      if (!e.tty || !e.tty.ops.put_char)
        throw new u.ErrnoError(60);
      try {
        for (var c = 0; c < n; c++)
          e.tty.ops.put_char(e.tty, t[r + c]);
      } catch {
        throw new u.ErrnoError(29);
      }
      return n && (e.node.mtime = e.node.ctime = Date.now()), c;
    } }, default_tty_ops: { get_char(e) {
      return Xr();
    }, put_char(e, t) {
      t === null || t === 10 ? (At(qe(e.output)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync(e) {
      e.output && e.output.length > 0 && (At(qe(e.output)), e.output = []);
    }, ioctl_tcgets(e) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets(e, t, r) {
      return 0;
    }, ioctl_tiocgwinsz(e) {
      return [24, 80];
    } }, default_tty1_ops: { put_char(e, t) {
      t === null || t === 10 ? (be(qe(e.output)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync(e) {
      e.output && e.output.length > 0 && (be(qe(e.output)), e.output = []);
    } } }, qr = (e, t) => {
      ne.fill(0, e, e + t);
    }, yi = (e, t) => Math.ceil(e / t) * t, Ci = (e) => {
      e = yi(e, 65536);
      var t = Zi(65536, e);
      return t && qr(t, e), t;
    }, x = { ops_table: null, mount(e) {
      return x.createNode(null, "/", 16895, 0);
    }, createNode(e, t, r, n) {
      if (u.isBlkdev(r) || u.isFIFO(r))
        throw new u.ErrnoError(63);
      x.ops_table ||= { dir: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr, lookup: x.node_ops.lookup, mknod: x.node_ops.mknod, rename: x.node_ops.rename, unlink: x.node_ops.unlink, rmdir: x.node_ops.rmdir, readdir: x.node_ops.readdir, symlink: x.node_ops.symlink }, stream: { llseek: x.stream_ops.llseek } }, file: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr }, stream: { llseek: x.stream_ops.llseek, read: x.stream_ops.read, write: x.stream_ops.write, allocate: x.stream_ops.allocate, mmap: x.stream_ops.mmap, msync: x.stream_ops.msync } }, link: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr, readlink: x.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: x.node_ops.getattr, setattr: x.node_ops.setattr }, stream: u.chrdev_stream_ops } };
      var _ = u.createNode(e, t, r, n);
      return u.isDir(_.mode) ? (_.node_ops = x.ops_table.dir.node, _.stream_ops = x.ops_table.dir.stream, _.contents = {}) : u.isFile(_.mode) ? (_.node_ops = x.ops_table.file.node, _.stream_ops = x.ops_table.file.stream, _.usedBytes = 0, _.contents = null) : u.isLink(_.mode) ? (_.node_ops = x.ops_table.link.node, _.stream_ops = x.ops_table.link.stream) : u.isChrdev(_.mode) && (_.node_ops = x.ops_table.chrdev.node, _.stream_ops = x.ops_table.chrdev.stream), _.atime = _.mtime = _.ctime = Date.now(), e && (e.contents[t] = _, e.atime = e.mtime = e.ctime = _.atime), _;
    }, getFileDataAsTypedArray(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
    }, expandFileStorage(e, t) {
      var r = e.contents ? e.contents.length : 0;
      if (!(r >= t)) {
        var n = 1024 * 1024;
        t = Math.max(t, r * (r < n ? 2 : 1.125) >>> 0), r != 0 && (t = Math.max(t, 256));
        var _ = e.contents;
        e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(_.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage(e, t) {
      if (e.usedBytes != t)
        if (t == 0)
          e.contents = null, e.usedBytes = 0;
        else {
          var r = e.contents;
          e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
        }
    }, node_ops: { getattr(e) {
      var t = {};
      return t.dev = u.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, u.isDir(e.mode) ? t.size = 4096 : u.isFile(e.mode) ? t.size = e.usedBytes : u.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.atime), t.mtime = new Date(e.mtime), t.ctime = new Date(e.ctime), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
    }, setattr(e, t) {
      for (const r of ["mode", "atime", "mtime", "ctime"])
        t[r] && (e[r] = t[r]);
      t.size !== void 0 && x.resizeFileStorage(e, t.size);
    }, lookup(e, t) {
      throw x.doesNotExistError;
    }, mknod(e, t, r, n) {
      return x.createNode(e, t, r, n);
    }, rename(e, t, r) {
      var n;
      try {
        n = u.lookupNode(t, r);
      } catch {
      }
      if (n) {
        if (u.isDir(e.mode))
          for (var _ in n.contents)
            throw new u.ErrnoError(55);
        u.hashRemoveNode(n);
      }
      delete e.parent.contents[e.name], t.contents[r] = e, e.name = r, t.ctime = t.mtime = e.parent.ctime = e.parent.mtime = Date.now();
    }, unlink(e, t) {
      delete e.contents[t], e.ctime = e.mtime = Date.now();
    }, rmdir(e, t) {
      var r = u.lookupNode(e, t);
      for (var n in r.contents)
        throw new u.ErrnoError(55);
      delete e.contents[t], e.ctime = e.mtime = Date.now();
    }, readdir(e) {
      return [".", "..", ...Object.keys(e.contents)];
    }, symlink(e, t, r) {
      var n = x.createNode(e, t, 41471, 0);
      return n.link = r, n;
    }, readlink(e) {
      if (!u.isLink(e.mode))
        throw new u.ErrnoError(28);
      return e.link;
    } }, stream_ops: { read(e, t, r, n, _) {
      var c = e.node.contents;
      if (_ >= e.node.usedBytes) return 0;
      var h = Math.min(e.node.usedBytes - _, n);
      if (h > 8 && c.subarray)
        t.set(c.subarray(_, _ + h), r);
      else
        for (var d = 0; d < h; d++) t[r + d] = c[_ + d];
      return h;
    }, write(e, t, r, n, _, c) {
      if (t.buffer === V.buffer && (c = !1), !n) return 0;
      var h = e.node;
      if (h.mtime = h.ctime = Date.now(), t.subarray && (!h.contents || h.contents.subarray)) {
        if (c)
          return h.contents = t.subarray(r, r + n), h.usedBytes = n, n;
        if (h.usedBytes === 0 && _ === 0)
          return h.contents = t.slice(r, r + n), h.usedBytes = n, n;
        if (_ + n <= h.usedBytes)
          return h.contents.set(t.subarray(r, r + n), _), n;
      }
      if (x.expandFileStorage(h, _ + n), h.contents.subarray && t.subarray)
        h.contents.set(t.subarray(r, r + n), _);
      else
        for (var d = 0; d < n; d++)
          h.contents[_ + d] = t[r + d];
      return h.usedBytes = Math.max(h.usedBytes, _ + n), n;
    }, llseek(e, t, r) {
      var n = t;
      if (r === 1 ? n += e.position : r === 2 && u.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0)
        throw new u.ErrnoError(28);
      return n;
    }, allocate(e, t, r) {
      x.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r);
    }, mmap(e, t, r, n, _) {
      if (!u.isFile(e.node.mode))
        throw new u.ErrnoError(43);
      var c, h, d = e.node.contents;
      if (!(_ & 2) && d && d.buffer === V.buffer)
        h = !1, c = d.byteOffset;
      else {
        if (h = !0, c = Ci(t), !c)
          throw new u.ErrnoError(48);
        d && ((r > 0 || r + t < d.length) && (d.subarray ? d = d.subarray(r, r + t) : d = Array.prototype.slice.call(d, r, r + t)), V.set(d, c >>> 0));
      }
      return { ptr: c, allocated: h };
    }, msync(e, t, r, n, _) {
      return x.stream_ops.write(e, t, 0, n, r, !1), 0;
    } } }, Qr = async (e) => {
      var t = await xe(e);
      return new Uint8Array(t);
    }, Kr = (e, t, r, n, _, c) => {
      u.createDataFile(e, t, r, n, _, c);
    }, Or = i.preloadPlugins || [], Jr = (e, t, r, n) => {
      typeof Browser < "u" && Browser.init();
      var _ = !1;
      return Or.forEach((c) => {
        _ || c.canHandle(t) && (c.handle(e, t, r, n), _ = !0);
      }), _;
    }, Zr = (e, t, r, n, _, c, h, d, f, v) => {
      var w = t ? Xe.resolve(j.join2(e, t)) : e;
      function y(C) {
        function D(G) {
          v?.(), d || Kr(e, t, G, n, _, f), c?.(), xt();
        }
        Jr(C, w, D, () => {
          h?.(), xt();
        }) || D(C);
      }
      fi(), typeof r == "string" ? Qr(r).then(y, h) : y(r);
    }, ea = (e) => {
      var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, r = t[e];
      if (typeof r > "u")
        throw new Error(`Unknown file open mode: ${e}`);
      return r;
    }, Nt = (e, t) => {
      var r = 0;
      return e && (r |= 365), t && (r |= 146), r;
    }, u = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: class {
      name = "ErrnoError";
      constructor(e) {
        this.errno = e;
      }
    }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
      shared = {};
      get object() {
        return this.node;
      }
      set object(e) {
        this.node = e;
      }
      get isRead() {
        return (this.flags & 2097155) !== 1;
      }
      get isWrite() {
        return (this.flags & 2097155) !== 0;
      }
      get isAppend() {
        return this.flags & 1024;
      }
      get flags() {
        return this.shared.flags;
      }
      set flags(e) {
        this.shared.flags = e;
      }
      get position() {
        return this.shared.position;
      }
      set position(e) {
        this.shared.position = e;
      }
    }, FSNode: class {
      node_ops = {};
      stream_ops = {};
      readMode = 365;
      writeMode = 146;
      mounted = null;
      constructor(e, t, r, n) {
        e || (e = this), this.parent = e, this.mount = e.mount, this.id = u.nextInode++, this.name = t, this.mode = r, this.rdev = n, this.atime = this.mtime = this.ctime = Date.now();
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(e) {
        e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(e) {
        e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return u.isDir(this.mode);
      }
      get isDevice() {
        return u.isChrdev(this.mode);
      }
    }, lookupPath(e, t = {}) {
      if (!e) return { path: "", node: null };
      t.follow_mount ??= !0, j.isAbs(e) || (e = u.cwd() + "/" + e);
      e: for (var r = 0; r < 40; r++) {
        for (var n = e.split("/").filter((v) => !!v && v !== "."), _ = u.root, c = "/", h = 0; h < n.length; h++) {
          var d = h === n.length - 1;
          if (d && t.parent)
            break;
          if (n[h] === "..") {
            c = j.dirname(c), _ = _.parent;
            continue;
          }
          c = j.join2(c, n[h]);
          try {
            _ = u.lookupNode(_, n[h]);
          } catch (v) {
            if (v?.errno === 44 && d && t.noent_okay)
              return { path: c };
            throw v;
          }
          if (u.isMountpoint(_) && (!d || t.follow_mount) && (_ = _.mounted.root), u.isLink(_.mode) && (!d || t.follow)) {
            if (!_.node_ops.readlink)
              throw new u.ErrnoError(52);
            var f = _.node_ops.readlink(_);
            j.isAbs(f) || (f = j.dirname(c) + "/" + f), e = f + "/" + n.slice(h + 1).join("/");
            continue e;
          }
        }
        return { path: c, node: _ };
      }
      throw new u.ErrnoError(32);
    }, getPath(e) {
      for (var t; ; ) {
        if (u.isRoot(e)) {
          var r = e.mount.mountpoint;
          return t ? r[r.length - 1] !== "/" ? `${r}/${t}` : r + t : r;
        }
        t = t ? `${e.name}/${t}` : e.name, e = e.parent;
      }
    }, hashName(e, t) {
      for (var r = 0, n = 0; n < t.length; n++)
        r = (r << 5) - r + t.charCodeAt(n) | 0;
      return (e + r >>> 0) % u.nameTable.length;
    }, hashAddNode(e) {
      var t = u.hashName(e.parent.id, e.name);
      e.name_next = u.nameTable[t], u.nameTable[t] = e;
    }, hashRemoveNode(e) {
      var t = u.hashName(e.parent.id, e.name);
      if (u.nameTable[t] === e)
        u.nameTable[t] = e.name_next;
      else
        for (var r = u.nameTable[t]; r; ) {
          if (r.name_next === e) {
            r.name_next = e.name_next;
            break;
          }
          r = r.name_next;
        }
    }, lookupNode(e, t) {
      var r = u.mayLookup(e);
      if (r)
        throw new u.ErrnoError(r);
      for (var n = u.hashName(e.id, t), _ = u.nameTable[n]; _; _ = _.name_next) {
        var c = _.name;
        if (_.parent.id === e.id && c === t)
          return _;
      }
      return u.lookup(e, t);
    }, createNode(e, t, r, n) {
      var _ = new u.FSNode(e, t, r, n);
      return u.hashAddNode(_), _;
    }, destroyNode(e) {
      u.hashRemoveNode(e);
    }, isRoot(e) {
      return e === e.parent;
    }, isMountpoint(e) {
      return !!e.mounted;
    }, isFile(e) {
      return (e & 61440) === 32768;
    }, isDir(e) {
      return (e & 61440) === 16384;
    }, isLink(e) {
      return (e & 61440) === 40960;
    }, isChrdev(e) {
      return (e & 61440) === 8192;
    }, isBlkdev(e) {
      return (e & 61440) === 24576;
    }, isFIFO(e) {
      return (e & 61440) === 4096;
    }, isSocket(e) {
      return (e & 49152) === 49152;
    }, flagsToPermissionString(e) {
      var t = ["r", "w", "rw"][e & 3];
      return e & 512 && (t += "w"), t;
    }, nodePermissions(e, t) {
      return u.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0;
    }, mayLookup(e) {
      if (!u.isDir(e.mode)) return 54;
      var t = u.nodePermissions(e, "x");
      return t || (e.node_ops.lookup ? 0 : 2);
    }, mayCreate(e, t) {
      if (!u.isDir(e.mode))
        return 54;
      try {
        var r = u.lookupNode(e, t);
        return 20;
      } catch {
      }
      return u.nodePermissions(e, "wx");
    }, mayDelete(e, t, r) {
      var n;
      try {
        n = u.lookupNode(e, t);
      } catch (c) {
        return c.errno;
      }
      var _ = u.nodePermissions(e, "wx");
      if (_)
        return _;
      if (r) {
        if (!u.isDir(n.mode))
          return 54;
        if (u.isRoot(n) || u.getPath(n) === u.cwd())
          return 10;
      } else if (u.isDir(n.mode))
        return 31;
      return 0;
    }, mayOpen(e, t) {
      return e ? u.isLink(e.mode) ? 32 : u.isDir(e.mode) && (u.flagsToPermissionString(t) !== "r" || t & 512) ? 31 : u.nodePermissions(e, u.flagsToPermissionString(t)) : 44;
    }, MAX_OPEN_FDS: 4096, nextfd() {
      for (var e = 0; e <= u.MAX_OPEN_FDS; e++)
        if (!u.streams[e])
          return e;
      throw new u.ErrnoError(33);
    }, getStreamChecked(e) {
      var t = u.getStream(e);
      if (!t)
        throw new u.ErrnoError(8);
      return t;
    }, getStream: (e) => u.streams[e], createStream(e, t = -1) {
      return e = Object.assign(new u.FSStream(), e), t == -1 && (t = u.nextfd()), e.fd = t, u.streams[t] = e, e;
    }, closeStream(e) {
      u.streams[e] = null;
    }, dupStream(e, t = -1) {
      var r = u.createStream(e, t);
      return r.stream_ops?.dup?.(r), r;
    }, chrdev_stream_ops: { open(e) {
      var t = u.getDevice(e.node.rdev);
      e.stream_ops = t.stream_ops, e.stream_ops.open?.(e);
    }, llseek() {
      throw new u.ErrnoError(70);
    } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t) => e << 8 | t, registerDevice(e, t) {
      u.devices[e] = { stream_ops: t };
    }, getDevice: (e) => u.devices[e], getMounts(e) {
      for (var t = [], r = [e]; r.length; ) {
        var n = r.pop();
        t.push(n), r.push(...n.mounts);
      }
      return t;
    }, syncfs(e, t) {
      typeof e == "function" && (t = e, e = !1), u.syncFSRequests++, u.syncFSRequests > 1 && be(`warning: ${u.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var r = u.getMounts(u.root.mount), n = 0;
      function _(h) {
        return u.syncFSRequests--, t(h);
      }
      function c(h) {
        if (h)
          return c.errored ? void 0 : (c.errored = !0, _(h));
        ++n >= r.length && _(null);
      }
      r.forEach((h) => {
        if (!h.type.syncfs)
          return c(null);
        h.type.syncfs(h, e, c);
      });
    }, mount(e, t, r) {
      var n = r === "/", _ = !r, c;
      if (n && u.root)
        throw new u.ErrnoError(10);
      if (!n && !_) {
        var h = u.lookupPath(r, { follow_mount: !1 });
        if (r = h.path, c = h.node, u.isMountpoint(c))
          throw new u.ErrnoError(10);
        if (!u.isDir(c.mode))
          throw new u.ErrnoError(54);
      }
      var d = { type: e, opts: t, mountpoint: r, mounts: [] }, f = e.mount(d);
      return f.mount = d, d.root = f, n ? u.root = f : c && (c.mounted = d, c.mount && c.mount.mounts.push(d)), f;
    }, unmount(e) {
      var t = u.lookupPath(e, { follow_mount: !1 });
      if (!u.isMountpoint(t.node))
        throw new u.ErrnoError(28);
      var r = t.node, n = r.mounted, _ = u.getMounts(n);
      Object.keys(u.nameTable).forEach((h) => {
        for (var d = u.nameTable[h]; d; ) {
          var f = d.name_next;
          _.includes(d.mount) && u.destroyNode(d), d = f;
        }
      }), r.mounted = null;
      var c = r.mount.mounts.indexOf(n);
      r.mount.mounts.splice(c, 1);
    }, lookup(e, t) {
      return e.node_ops.lookup(e, t);
    }, mknod(e, t, r) {
      var n = u.lookupPath(e, { parent: !0 }), _ = n.node, c = j.basename(e);
      if (!c || c === "." || c === "..")
        throw new u.ErrnoError(28);
      var h = u.mayCreate(_, c);
      if (h)
        throw new u.ErrnoError(h);
      if (!_.node_ops.mknod)
        throw new u.ErrnoError(63);
      return _.node_ops.mknod(_, c, t, r);
    }, statfs(e) {
      var t = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: u.nextInode, ffree: u.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, r = u.lookupPath(e, { follow: !0 }).node;
      return r?.node_ops.statfs && Object.assign(t, r.node_ops.statfs(r.mount.opts.root)), t;
    }, create(e, t = 438) {
      return t &= 4095, t |= 32768, u.mknod(e, t, 0);
    }, mkdir(e, t = 511) {
      return t &= 1023, t |= 16384, u.mknod(e, t, 0);
    }, mkdirTree(e, t) {
      for (var r = e.split("/"), n = "", _ = 0; _ < r.length; ++_)
        if (r[_]) {
          n += "/" + r[_];
          try {
            u.mkdir(n, t);
          } catch (c) {
            if (c.errno != 20) throw c;
          }
        }
    }, mkdev(e, t, r) {
      return typeof r > "u" && (r = t, t = 438), t |= 8192, u.mknod(e, t, r);
    }, symlink(e, t) {
      if (!Xe.resolve(e))
        throw new u.ErrnoError(44);
      var r = u.lookupPath(t, { parent: !0 }), n = r.node;
      if (!n)
        throw new u.ErrnoError(44);
      var _ = j.basename(t), c = u.mayCreate(n, _);
      if (c)
        throw new u.ErrnoError(c);
      if (!n.node_ops.symlink)
        throw new u.ErrnoError(63);
      return n.node_ops.symlink(n, _, e);
    }, rename(e, t) {
      var r = j.dirname(e), n = j.dirname(t), _ = j.basename(e), c = j.basename(t), h, d, f;
      if (h = u.lookupPath(e, { parent: !0 }), d = h.node, h = u.lookupPath(t, { parent: !0 }), f = h.node, !d || !f) throw new u.ErrnoError(44);
      if (d.mount !== f.mount)
        throw new u.ErrnoError(75);
      var v = u.lookupNode(d, _), w = Xe.relative(e, n);
      if (w.charAt(0) !== ".")
        throw new u.ErrnoError(28);
      if (w = Xe.relative(t, r), w.charAt(0) !== ".")
        throw new u.ErrnoError(55);
      var y;
      try {
        y = u.lookupNode(f, c);
      } catch {
      }
      if (v !== y) {
        var C = u.isDir(v.mode), D = u.mayDelete(d, _, C);
        if (D)
          throw new u.ErrnoError(D);
        if (D = y ? u.mayDelete(f, c, C) : u.mayCreate(f, c), D)
          throw new u.ErrnoError(D);
        if (!d.node_ops.rename)
          throw new u.ErrnoError(63);
        if (u.isMountpoint(v) || y && u.isMountpoint(y))
          throw new u.ErrnoError(10);
        if (f !== d && (D = u.nodePermissions(d, "w"), D))
          throw new u.ErrnoError(D);
        u.hashRemoveNode(v);
        try {
          d.node_ops.rename(v, f, c), v.parent = f;
        } catch (G) {
          throw G;
        } finally {
          u.hashAddNode(v);
        }
      }
    }, rmdir(e) {
      var t = u.lookupPath(e, { parent: !0 }), r = t.node, n = j.basename(e), _ = u.lookupNode(r, n), c = u.mayDelete(r, n, !0);
      if (c)
        throw new u.ErrnoError(c);
      if (!r.node_ops.rmdir)
        throw new u.ErrnoError(63);
      if (u.isMountpoint(_))
        throw new u.ErrnoError(10);
      r.node_ops.rmdir(r, n), u.destroyNode(_);
    }, readdir(e) {
      var t = u.lookupPath(e, { follow: !0 }), r = t.node;
      if (!r.node_ops.readdir)
        throw new u.ErrnoError(54);
      return r.node_ops.readdir(r);
    }, unlink(e) {
      var t = u.lookupPath(e, { parent: !0 }), r = t.node;
      if (!r)
        throw new u.ErrnoError(44);
      var n = j.basename(e), _ = u.lookupNode(r, n), c = u.mayDelete(r, n, !1);
      if (c)
        throw new u.ErrnoError(c);
      if (!r.node_ops.unlink)
        throw new u.ErrnoError(63);
      if (u.isMountpoint(_))
        throw new u.ErrnoError(10);
      r.node_ops.unlink(r, n), u.destroyNode(_);
    }, readlink(e) {
      var t = u.lookupPath(e), r = t.node;
      if (!r)
        throw new u.ErrnoError(44);
      if (!r.node_ops.readlink)
        throw new u.ErrnoError(28);
      return r.node_ops.readlink(r);
    }, stat(e, t) {
      var r = u.lookupPath(e, { follow: !t }), n = r.node;
      if (!n)
        throw new u.ErrnoError(44);
      if (!n.node_ops.getattr)
        throw new u.ErrnoError(63);
      return n.node_ops.getattr(n);
    }, lstat(e) {
      return u.stat(e, !0);
    }, chmod(e, t, r) {
      var n;
      if (typeof e == "string") {
        var _ = u.lookupPath(e, { follow: !r });
        n = _.node;
      } else
        n = e;
      if (!n.node_ops.setattr)
        throw new u.ErrnoError(63);
      n.node_ops.setattr(n, { mode: t & 4095 | n.mode & -4096, ctime: Date.now() });
    }, lchmod(e, t) {
      u.chmod(e, t, !0);
    }, fchmod(e, t) {
      var r = u.getStreamChecked(e);
      u.chmod(r.node, t);
    }, chown(e, t, r, n) {
      var _;
      if (typeof e == "string") {
        var c = u.lookupPath(e, { follow: !n });
        _ = c.node;
      } else
        _ = e;
      if (!_.node_ops.setattr)
        throw new u.ErrnoError(63);
      _.node_ops.setattr(_, { timestamp: Date.now() });
    }, lchown(e, t, r) {
      u.chown(e, t, r, !0);
    }, fchown(e, t, r) {
      var n = u.getStreamChecked(e);
      u.chown(n.node, t, r);
    }, truncate(e, t) {
      if (t < 0)
        throw new u.ErrnoError(28);
      var r;
      if (typeof e == "string") {
        var n = u.lookupPath(e, { follow: !0 });
        r = n.node;
      } else
        r = e;
      if (!r.node_ops.setattr)
        throw new u.ErrnoError(63);
      if (u.isDir(r.mode))
        throw new u.ErrnoError(31);
      if (!u.isFile(r.mode))
        throw new u.ErrnoError(28);
      var _ = u.nodePermissions(r, "w");
      if (_)
        throw new u.ErrnoError(_);
      r.node_ops.setattr(r, { size: t, timestamp: Date.now() });
    }, ftruncate(e, t) {
      var r = u.getStreamChecked(e);
      if (!(r.flags & 2097155))
        throw new u.ErrnoError(28);
      u.truncate(r.node, t);
    }, utime(e, t, r) {
      var n = u.lookupPath(e, { follow: !0 }), _ = n.node;
      _.node_ops.setattr(_, { atime: t, mtime: r });
    }, open(e, t, r = 438) {
      if (e === "")
        throw new u.ErrnoError(44);
      t = typeof t == "string" ? ea(t) : t, t & 64 ? r = r & 4095 | 32768 : r = 0;
      var n;
      if (typeof e == "object")
        n = e;
      else {
        var _ = u.lookupPath(e, { follow: !(t & 131072), noent_okay: !0 });
        n = _.node, e = _.path;
      }
      var c = !1;
      if (t & 64)
        if (n) {
          if (t & 128)
            throw new u.ErrnoError(20);
        } else
          n = u.mknod(e, r, 0), c = !0;
      if (!n)
        throw new u.ErrnoError(44);
      if (u.isChrdev(n.mode) && (t &= -513), t & 65536 && !u.isDir(n.mode))
        throw new u.ErrnoError(54);
      if (!c) {
        var h = u.mayOpen(n, t);
        if (h)
          throw new u.ErrnoError(h);
      }
      t & 512 && !c && u.truncate(n, 0), t &= -131713;
      var d = u.createStream({ node: n, path: u.getPath(n), flags: t, seekable: !0, position: 0, stream_ops: n.stream_ops, ungotten: [], error: !1 });
      return d.stream_ops.open && d.stream_ops.open(d), i.logReadFiles && !(t & 1) && (e in u.readFiles || (u.readFiles[e] = 1)), d;
    }, close(e) {
      if (u.isClosed(e))
        throw new u.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (t) {
        throw t;
      } finally {
        u.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed(e) {
      return e.fd === null;
    }, llseek(e, t, r) {
      if (u.isClosed(e))
        throw new u.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek)
        throw new u.ErrnoError(70);
      if (r != 0 && r != 1 && r != 2)
        throw new u.ErrnoError(28);
      return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position;
    }, read(e, t, r, n, _) {
      if (n < 0 || _ < 0)
        throw new u.ErrnoError(28);
      if (u.isClosed(e))
        throw new u.ErrnoError(8);
      if ((e.flags & 2097155) === 1)
        throw new u.ErrnoError(8);
      if (u.isDir(e.node.mode))
        throw new u.ErrnoError(31);
      if (!e.stream_ops.read)
        throw new u.ErrnoError(28);
      var c = typeof _ < "u";
      if (!c)
        _ = e.position;
      else if (!e.seekable)
        throw new u.ErrnoError(70);
      var h = e.stream_ops.read(e, t, r, n, _);
      return c || (e.position += h), h;
    }, write(e, t, r, n, _, c) {
      if (n < 0 || _ < 0)
        throw new u.ErrnoError(28);
      if (u.isClosed(e))
        throw new u.ErrnoError(8);
      if (!(e.flags & 2097155))
        throw new u.ErrnoError(8);
      if (u.isDir(e.node.mode))
        throw new u.ErrnoError(31);
      if (!e.stream_ops.write)
        throw new u.ErrnoError(28);
      e.seekable && e.flags & 1024 && u.llseek(e, 0, 2);
      var h = typeof _ < "u";
      if (!h)
        _ = e.position;
      else if (!e.seekable)
        throw new u.ErrnoError(70);
      var d = e.stream_ops.write(e, t, r, n, _, c);
      return h || (e.position += d), d;
    }, allocate(e, t, r) {
      if (u.isClosed(e))
        throw new u.ErrnoError(8);
      if (t < 0 || r <= 0)
        throw new u.ErrnoError(28);
      if (!(e.flags & 2097155))
        throw new u.ErrnoError(8);
      if (!u.isFile(e.node.mode) && !u.isDir(e.node.mode))
        throw new u.ErrnoError(43);
      if (!e.stream_ops.allocate)
        throw new u.ErrnoError(138);
      e.stream_ops.allocate(e, t, r);
    }, mmap(e, t, r, n, _) {
      if (n & 2 && !(_ & 2) && (e.flags & 2097155) !== 2)
        throw new u.ErrnoError(2);
      if ((e.flags & 2097155) === 1)
        throw new u.ErrnoError(2);
      if (!e.stream_ops.mmap)
        throw new u.ErrnoError(43);
      if (!t)
        throw new u.ErrnoError(28);
      return e.stream_ops.mmap(e, t, r, n, _);
    }, msync(e, t, r, n, _) {
      return e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, _) : 0;
    }, ioctl(e, t, r) {
      if (!e.stream_ops.ioctl)
        throw new u.ErrnoError(59);
      return e.stream_ops.ioctl(e, t, r);
    }, readFile(e, t = {}) {
      if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary")
        throw new Error(`Invalid encoding type "${t.encoding}"`);
      var r, n = u.open(e, t.flags), _ = u.stat(e), c = _.size, h = new Uint8Array(c);
      return u.read(n, h, 0, c, 0), t.encoding === "utf8" ? r = qe(h) : t.encoding === "binary" && (r = h), u.close(n), r;
    }, writeFile(e, t, r = {}) {
      r.flags = r.flags || 577;
      var n = u.open(e, r.flags, r.mode);
      if (typeof t == "string") {
        var _ = new Uint8Array(Qe(t) + 1), c = zt(t, _, 0, _.length);
        u.write(n, _, 0, c, void 0, r.canOwn);
      } else if (ArrayBuffer.isView(t))
        u.write(n, t, 0, t.byteLength, void 0, r.canOwn);
      else
        throw new Error("Unsupported data type");
      u.close(n);
    }, cwd: () => u.currentPath, chdir(e) {
      var t = u.lookupPath(e, { follow: !0 });
      if (t.node === null)
        throw new u.ErrnoError(44);
      if (!u.isDir(t.node.mode))
        throw new u.ErrnoError(54);
      var r = u.nodePermissions(t.node, "x");
      if (r)
        throw new u.ErrnoError(r);
      u.currentPath = t.path;
    }, createDefaultDirectories() {
      u.mkdir("/tmp"), u.mkdir("/home"), u.mkdir("/home/web_user");
    }, createDefaultDevices() {
      u.mkdir("/dev"), u.registerDevice(u.makedev(1, 3), { read: () => 0, write: (n, _, c, h, d) => h, llseek: () => 0 }), u.mkdev("/dev/null", u.makedev(1, 3)), We.register(u.makedev(5, 0), We.default_tty_ops), We.register(u.makedev(6, 0), We.default_tty1_ops), u.mkdev("/dev/tty", u.makedev(5, 0)), u.mkdev("/dev/tty1", u.makedev(6, 0));
      var e = new Uint8Array(1024), t = 0, r = () => (t === 0 && (t = Wt(e).byteLength), e[--t]);
      u.createDevice("/dev", "random", r), u.createDevice("/dev", "urandom", r), u.mkdir("/dev/shm"), u.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      u.mkdir("/proc");
      var e = u.mkdir("/proc/self");
      u.mkdir("/proc/self/fd"), u.mount({ mount() {
        var t = u.createNode(e, "fd", 16895, 73);
        return t.stream_ops = { llseek: x.stream_ops.llseek }, t.node_ops = { lookup(r, n) {
          var _ = +n, c = u.getStreamChecked(_), h = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => c.path }, id: _ + 1 };
          return h.parent = h, h;
        }, readdir() {
          return Array.from(u.streams.entries()).filter(([r, n]) => n).map(([r, n]) => r.toString());
        } }, t;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(e, t, r) {
      e ? u.createDevice("/dev", "stdin", e) : u.symlink("/dev/tty", "/dev/stdin"), t ? u.createDevice("/dev", "stdout", null, t) : u.symlink("/dev/tty", "/dev/stdout"), r ? u.createDevice("/dev", "stderr", null, r) : u.symlink("/dev/tty1", "/dev/stderr"), u.open("/dev/stdin", 0), u.open("/dev/stdout", 1), u.open("/dev/stderr", 1);
    }, staticInit() {
      u.nameTable = new Array(4096), u.mount(x, {}, "/"), u.createDefaultDirectories(), u.createDefaultDevices(), u.createSpecialDirectories(), u.filesystems = { MEMFS: x };
    }, init(e, t, r) {
      u.initialized = !0, e ??= i.stdin, t ??= i.stdout, r ??= i.stderr, u.createStandardStreams(e, t, r);
    }, quit() {
      u.initialized = !1;
      for (var e = 0; e < u.streams.length; e++) {
        var t = u.streams[e];
        t && u.close(t);
      }
    }, findObject(e, t) {
      var r = u.analyzePath(e, t);
      return r.exists ? r.object : null;
    }, analyzePath(e, t) {
      try {
        var r = u.lookupPath(e, { follow: !t });
        e = r.path;
      } catch {
      }
      var n = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var r = u.lookupPath(e, { parent: !0 });
        n.parentExists = !0, n.parentPath = r.path, n.parentObject = r.node, n.name = j.basename(e), r = u.lookupPath(e, { follow: !t }), n.exists = !0, n.path = r.path, n.object = r.node, n.name = r.node.name, n.isRoot = r.path === "/";
      } catch (_) {
        n.error = _.errno;
      }
      return n;
    }, createPath(e, t, r, n) {
      e = typeof e == "string" ? e : u.getPath(e);
      for (var _ = t.split("/").reverse(); _.length; ) {
        var c = _.pop();
        if (c) {
          var h = j.join2(e, c);
          try {
            u.mkdir(h);
          } catch {
          }
          e = h;
        }
      }
      return h;
    }, createFile(e, t, r, n, _) {
      var c = j.join2(typeof e == "string" ? e : u.getPath(e), t), h = Nt(n, _);
      return u.create(c, h);
    }, createDataFile(e, t, r, n, _, c) {
      var h = t;
      e && (e = typeof e == "string" ? e : u.getPath(e), h = t ? j.join2(e, t) : e);
      var d = Nt(n, _), f = u.create(h, d);
      if (r) {
        if (typeof r == "string") {
          for (var v = new Array(r.length), w = 0, y = r.length; w < y; ++w) v[w] = r.charCodeAt(w);
          r = v;
        }
        u.chmod(f, d | 146);
        var C = u.open(f, 577);
        u.write(C, r, 0, r.length, 0, c), u.close(C), u.chmod(f, d);
      }
    }, createDevice(e, t, r, n) {
      var _ = j.join2(typeof e == "string" ? e : u.getPath(e), t), c = Nt(!!r, !!n);
      u.createDevice.major ??= 64;
      var h = u.makedev(u.createDevice.major++, 0);
      return u.registerDevice(h, { open(d) {
        d.seekable = !1;
      }, close(d) {
        n?.buffer?.length && n(10);
      }, read(d, f, v, w, y) {
        for (var C = 0, D = 0; D < w; D++) {
          var G;
          try {
            G = r();
          } catch {
            throw new u.ErrnoError(29);
          }
          if (G === void 0 && C === 0)
            throw new u.ErrnoError(6);
          if (G == null) break;
          C++, f[v + D] = G;
        }
        return C && (d.node.atime = Date.now()), C;
      }, write(d, f, v, w, y) {
        for (var C = 0; C < w; C++)
          try {
            n(f[v + C]);
          } catch {
            throw new u.ErrnoError(29);
          }
        return w && (d.node.mtime = d.node.ctime = Date.now()), C;
      } }), u.mkdev(_, c, h);
    }, forceLoadFile(e) {
      if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      try {
        e.contents = je(e.url), e.usedBytes = e.contents.length;
      } catch {
        throw new u.ErrnoError(29);
      }
    }, createLazyFile(e, t, r, n, _) {
      class c {
        lengthKnown = !1;
        chunks = [];
        get(D) {
          if (!(D > this.length - 1 || D < 0)) {
            var G = D % this.chunkSize, Y = D / this.chunkSize | 0;
            return this.getter(Y)[G];
          }
        }
        setDataGetter(D) {
          this.getter = D;
        }
        cacheLength() {
          var D = new XMLHttpRequest();
          if (D.open("HEAD", r, !1), D.send(null), !(D.status >= 200 && D.status < 300 || D.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + D.status);
          var G = Number(D.getResponseHeader("Content-length")), Y, ie = (Y = D.getResponseHeader("Accept-Ranges")) && Y === "bytes", K = (Y = D.getResponseHeader("Content-Encoding")) && Y === "gzip", re = 1024 * 1024;
          ie || (re = G);
          var q = (ue, Ie) => {
            if (ue > Ie) throw new Error("invalid range (" + ue + ", " + Ie + ") or no bytes requested!");
            if (Ie > G - 1) throw new Error("only " + G + " bytes available! programmer error!");
            var O = new XMLHttpRequest();
            if (O.open("GET", r, !1), G !== re && O.setRequestHeader("Range", "bytes=" + ue + "-" + Ie), O.responseType = "arraybuffer", O.overrideMimeType && O.overrideMimeType("text/plain; charset=x-user-defined"), O.send(null), !(O.status >= 200 && O.status < 300 || O.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + O.status);
            return O.response !== void 0 ? new Uint8Array(O.response || []) : Ii(O.responseText || "");
          }, ze = this;
          ze.setDataGetter((ue) => {
            var Ie = ue * re, O = (ue + 1) * re - 1;
            if (O = Math.min(O, G - 1), typeof ze.chunks[ue] > "u" && (ze.chunks[ue] = q(Ie, O)), typeof ze.chunks[ue] > "u") throw new Error("doXHR failed!");
            return ze.chunks[ue];
          }), (K || !G) && (re = G = 1, G = this.getter(0).length, re = G, At("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = G, this._chunkSize = re, this.lengthKnown = !0;
        }
        get length() {
          return this.lengthKnown || this.cacheLength(), this._length;
        }
        get chunkSize() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        }
      }
      if (typeof XMLHttpRequest < "u") {
        if (!I) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var h = new c(), d = { isDevice: !1, contents: h };
      } else
        var d = { isDevice: !1, url: r };
      var f = u.createFile(e, t, d, n, _);
      d.contents ? f.contents = d.contents : d.url && (f.contents = null, f.url = d.url), Object.defineProperties(f, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var v = {}, w = Object.keys(f.stream_ops);
      w.forEach((C) => {
        var D = f.stream_ops[C];
        v[C] = (...G) => (u.forceLoadFile(f), D(...G));
      });
      function y(C, D, G, Y, ie) {
        var K = C.node.contents;
        if (ie >= K.length) return 0;
        var re = Math.min(K.length - ie, Y);
        if (K.slice)
          for (var q = 0; q < re; q++)
            D[G + q] = K[ie + q];
        else
          for (var q = 0; q < re; q++)
            D[G + q] = K.get(ie + q);
        return re;
      }
      return v.read = (C, D, G, Y, ie) => (u.forceLoadFile(f), y(C, D, G, Y, ie)), v.mmap = (C, D, G, Y, ie) => {
        u.forceLoadFile(f);
        var K = Ci(D);
        if (!K)
          throw new u.ErrnoError(48);
        return y(C, V, K, D, G), { ptr: K, allocated: !0 };
      }, f.stream_ops = v, f;
    } }, Ht = (e, t) => (e >>>= 0, e ? qe(ne, e, t) : ""), A = { DEFAULT_POLLMASK: 5, calculateAt(e, t, r) {
      if (j.isAbs(t))
        return t;
      var n;
      if (e === -100)
        n = u.cwd();
      else {
        var _ = A.getStreamFromFD(e);
        n = _.path;
      }
      if (t.length == 0) {
        if (!r)
          throw new u.ErrnoError(44);
        return n;
      }
      return n + "/" + t;
    }, doStat(e, t, r) {
      var n = e(t);
      P[r >>> 2 >>> 0] = n.dev, P[r + 4 >>> 2 >>> 0] = n.mode, L[r + 8 >>> 2 >>> 0] = n.nlink, P[r + 12 >>> 2 >>> 0] = n.uid, P[r + 16 >>> 2 >>> 0] = n.gid, P[r + 20 >>> 2 >>> 0] = n.rdev, oe[r + 24 >>> 3] = BigInt(n.size), P[r + 32 >>> 2 >>> 0] = 4096, P[r + 36 >>> 2 >>> 0] = n.blocks;
      var _ = n.atime.getTime(), c = n.mtime.getTime(), h = n.ctime.getTime();
      return oe[r + 40 >>> 3] = BigInt(Math.floor(_ / 1e3)), L[r + 48 >>> 2 >>> 0] = _ % 1e3 * 1e3 * 1e3, oe[r + 56 >>> 3] = BigInt(Math.floor(c / 1e3)), L[r + 64 >>> 2 >>> 0] = c % 1e3 * 1e3 * 1e3, oe[r + 72 >>> 3] = BigInt(Math.floor(h / 1e3)), L[r + 80 >>> 2 >>> 0] = h % 1e3 * 1e3 * 1e3, oe[r + 88 >>> 3] = BigInt(n.ino), 0;
    }, doMsync(e, t, r, n, _) {
      if (!u.isFile(t.node.mode))
        throw new u.ErrnoError(43);
      if (n & 2)
        return 0;
      var c = ne.slice(e, e + r);
      u.msync(t, c, _, r, n);
    }, getStreamFromFD(e) {
      var t = u.getStreamChecked(e);
      return t;
    }, varargs: void 0, getStr(e) {
      var t = Ht(e);
      return t;
    } };
    function ta(e, t) {
      e >>>= 0;
      try {
        return e = A.getStr(e), u.chmod(e, t), 0;
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function ia(e, t, r, n) {
      t >>>= 0;
      try {
        if (t = A.getStr(t), t = A.calculateAt(e, t), r & -8)
          return -28;
        var _ = u.lookupPath(t, { follow: !0 }), c = _.node;
        if (!c)
          return -44;
        var h = "";
        return r & 4 && (h += "r"), r & 2 && (h += "w"), r & 1 && (h += "x"), h && u.nodePermissions(c, h) ? -2 : 0;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    function ra(e, t, r, n) {
      r = Me(r), n = Me(n);
      try {
        if (isNaN(r)) return 61;
        var _ = A.getStreamFromFD(e);
        return u.allocate(_, r, n), 0;
      } catch (c) {
        if (typeof u > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function aa(e, t) {
      try {
        return u.fchmod(e, t), 0;
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    var Mt = () => {
      var e = P[+A.varargs >>> 2 >>> 0];
      return A.varargs += 4, e;
    }, Ke = Mt;
    function na(e, t, r) {
      r >>>= 0, A.varargs = r;
      try {
        var n = A.getStreamFromFD(e);
        switch (t) {
          case 0: {
            var _ = Mt();
            if (_ < 0)
              return -28;
            for (; u.streams[_]; )
              _++;
            var c;
            return c = u.dupStream(n, _), c.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return n.flags;
          case 4: {
            var _ = Mt();
            return n.flags |= _, 0;
          }
          case 12: {
            var _ = Ke(), h = 0;
            return le[_ + h >>> 1 >>> 0] = 2, 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    function sa(e, t) {
      t >>>= 0;
      try {
        var r = A.getStreamFromFD(e);
        return A.doStat(u.stat, r.path, t);
      } catch (n) {
        if (typeof u > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    var ke = (e, t, r) => zt(e, ne, t, r);
    function oa(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        if (t === 0) return -28;
        var r = u.cwd(), n = Qe(r) + 1;
        return t < n ? -68 : (ke(r, e, t), n);
      } catch (_) {
        if (typeof u > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    function _a(e, t, r) {
      t >>>= 0, r >>>= 0;
      try {
        var n = A.getStreamFromFD(e);
        n.getdents ||= u.readdir(n.path);
        for (var _ = 280, c = 0, h = u.llseek(n, 0, 1), d = Math.floor(h / _), f = Math.min(n.getdents.length, d + Math.floor(r / _)), v = d; v < f; v++) {
          var w, y, C = n.getdents[v];
          if (C === ".")
            w = n.node.id, y = 4;
          else if (C === "..") {
            var D = u.lookupPath(n.path, { parent: !0 });
            w = D.node.id, y = 4;
          } else {
            var G;
            try {
              G = u.lookupNode(n.node, C);
            } catch (Y) {
              if (Y?.errno === 28)
                continue;
              throw Y;
            }
            w = G.id, y = u.isChrdev(G.mode) ? 2 : u.isDir(G.mode) ? 4 : u.isLink(G.mode) ? 10 : 8;
          }
          oe[t + c >>> 3] = BigInt(w), oe[t + c + 8 >>> 3] = BigInt((v + 1) * _), le[t + c + 16 >>> 1 >>> 0] = 280, V[t + c + 18 >>> 0] = y, ke(C, t + c + 19, 256), c += _;
        }
        return u.llseek(n, v * _, 0), c;
      } catch (Y) {
        if (typeof u > "u" || Y.name !== "ErrnoError") throw Y;
        return -Y.errno;
      }
    }
    function ca(e, t, r) {
      r >>>= 0, A.varargs = r;
      try {
        var n = A.getStreamFromFD(e);
        switch (t) {
          case 21509:
            return n.tty ? 0 : -59;
          case 21505: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tcgets) {
              var _ = n.tty.ops.ioctl_tcgets(n), c = Ke();
              P[c >>> 2 >>> 0] = _.c_iflag || 0, P[c + 4 >>> 2 >>> 0] = _.c_oflag || 0, P[c + 8 >>> 2 >>> 0] = _.c_cflag || 0, P[c + 12 >>> 2 >>> 0] = _.c_lflag || 0;
              for (var h = 0; h < 32; h++)
                V[c + h + 17 >>> 0] = _.c_cc[h] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return n.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tcsets) {
              for (var c = Ke(), d = P[c >>> 2 >>> 0], f = P[c + 4 >>> 2 >>> 0], v = P[c + 8 >>> 2 >>> 0], w = P[c + 12 >>> 2 >>> 0], y = [], h = 0; h < 32; h++)
                y.push(V[c + h + 17 >>> 0]);
              return n.tty.ops.ioctl_tcsets(n.tty, t, { c_iflag: d, c_oflag: f, c_cflag: v, c_lflag: w, c_cc: y });
            }
            return 0;
          }
          case 21519: {
            if (!n.tty) return -59;
            var c = Ke();
            return P[c >>> 2 >>> 0] = 0, 0;
          }
          case 21520:
            return n.tty ? -28 : -59;
          case 21531: {
            var c = Ke();
            return u.ioctl(n, t, c);
          }
          case 21523: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tiocgwinsz) {
              var C = n.tty.ops.ioctl_tiocgwinsz(n.tty), c = Ke();
              le[c >>> 1 >>> 0] = C[0], le[c + 2 >>> 1 >>> 0] = C[1];
            }
            return 0;
          }
          case 21524:
            return n.tty ? 0 : -59;
          case 21515:
            return n.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (D) {
        if (typeof u > "u" || D.name !== "ErrnoError") throw D;
        return -D.errno;
      }
    }
    function la(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return e = A.getStr(e), A.doStat(u.lstat, e, t);
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function ga(e, t, r, n) {
      t >>>= 0, r >>>= 0;
      try {
        t = A.getStr(t);
        var _ = n & 256, c = n & 4096;
        return n = n & -6401, t = A.calculateAt(e, t, c), A.doStat(_ ? u.lstat : u.stat, t, r);
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return -h.errno;
      }
    }
    function ua(e, t, r, n) {
      t >>>= 0, n >>>= 0, A.varargs = n;
      try {
        t = A.getStr(t), t = A.calculateAt(e, t);
        var _ = n ? Mt() : 0;
        return u.open(t, r, _).fd;
      } catch (c) {
        if (typeof u > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    function ha(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        if (t = A.getStr(t), t = A.calculateAt(e, t), n <= 0) return -28;
        var _ = u.readlink(t), c = Math.min(n, Qe(_)), h = V[r + c >>> 0];
        return ke(_, r, n + 1), V[r + c >>> 0] = h, c;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    function da(e, t, r, n) {
      t >>>= 0, n >>>= 0;
      try {
        return t = A.getStr(t), n = A.getStr(n), t = A.calculateAt(e, t), n = A.calculateAt(r, n), u.rename(t, n), 0;
      } catch (_) {
        if (typeof u > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    function ma(e) {
      e >>>= 0;
      try {
        return e = A.getStr(e), u.rmdir(e), 0;
      } catch (t) {
        if (typeof u > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    function pa(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return e = A.getStr(e), A.doStat(u.stat, e, t);
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    function fa(e, t, r) {
      e >>>= 0, r >>>= 0;
      try {
        return e = A.getStr(e), r = A.getStr(r), r = A.calculateAt(t, r), u.symlink(e, r), 0;
      } catch (n) {
        if (typeof u > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    function Ma(e, t, r) {
      t >>>= 0;
      try {
        return t = A.getStr(t), t = A.calculateAt(e, t), r === 0 ? u.unlink(t) : r === 512 ? u.rmdir(t) : Ye("Invalid flags passed to unlinkat"), 0;
      } catch (n) {
        if (typeof u > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    var ka = () => Ye(""), kt = {}, $t = (e) => {
      for (; e.length; ) {
        var t = e.pop(), r = e.pop();
        r(t);
      }
    };
    function ot(e) {
      return this.fromWireType(L[e >>> 2 >>> 0]);
    }
    var Oe = {}, Be = {}, St = {}, Di, vt = (e) => {
      throw new Di(e);
    }, Ut = (e, t, r) => {
      e.forEach((d) => St[d] = t);
      function n(d) {
        var f = r(d);
        f.length !== e.length && vt("Mismatched type converter count");
        for (var v = 0; v < e.length; ++v)
          me(e[v], f[v]);
      }
      var _ = new Array(t.length), c = [], h = 0;
      t.forEach((d, f) => {
        Be.hasOwnProperty(d) ? _[f] = Be[d] : (c.push(d), Oe.hasOwnProperty(d) || (Oe[d] = []), Oe[d].push(() => {
          _[f] = Be[d], ++h, h === c.length && n(_);
        }));
      }), c.length === 0 && n(_);
    }, Sa = function(e) {
      e >>>= 0;
      var t = kt[e];
      delete kt[e];
      var r = t.rawConstructor, n = t.rawDestructor, _ = t.fields, c = _.map((h) => h.getterReturnType).concat(_.map((h) => h.setterArgumentType));
      Ut([e], c, (h) => {
        var d = {};
        return _.forEach((f, v) => {
          var w = f.fieldName, y = h[v], C = f.getter, D = f.getterContext, G = h[v + _.length], Y = f.setter, ie = f.setterContext;
          d[w] = { read: (K) => y.fromWireType(C(D, K)), write: (K, re) => {
            var q = [];
            Y(ie, K, G.toWireType(q, re)), $t(q);
          } };
        }), [{ name: t.name, fromWireType: (f) => {
          var v = {};
          for (var w in d)
            v[w] = d[w].read(f);
          return n(f), v;
        }, toWireType: (f, v) => {
          for (var w in d)
            if (!(w in v))
              throw new TypeError(`Missing field: "${w}"`);
          var y = r();
          for (w in d)
            d[w].write(y, v[w]);
          return f !== null && f.push(n, y), y;
        }, argPackAdvance: pe, readValueFromPointer: ot, destructorFunction: n }];
      });
    }, wt = (e) => {
      if (e === null)
        return "null";
      var t = typeof e;
      return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
    }, va = () => {
      for (var e = new Array(256), t = 0; t < 256; ++t)
        e[t] = String.fromCharCode(t);
      Pi = e;
    }, Pi, te = (e) => {
      for (var t = "", r = e; ne[r >>> 0]; )
        t += Pi[ne[r++ >>> 0]];
      return t;
    }, _t, $ = (e) => {
      throw new _t(e);
    };
    function wa(e, t, r = {}) {
      var n = t.name;
      if (e || $(`type "${n}" must have a positive integer typeid pointer`), Be.hasOwnProperty(e)) {
        if (r.ignoreDuplicateRegistrations)
          return;
        $(`Cannot register type '${n}' twice`);
      }
      if (Be[e] = t, delete St[e], Oe.hasOwnProperty(e)) {
        var _ = Oe[e];
        delete Oe[e], _.forEach((c) => c());
      }
    }
    function me(e, t, r = {}) {
      return wa(e, t, r);
    }
    var Ei = (e, t, r) => {
      switch (t) {
        case 1:
          return r ? (n) => V[n >>> 0] : (n) => ne[n >>> 0];
        case 2:
          return r ? (n) => le[n >>> 1 >>> 0] : (n) => at[n >>> 1 >>> 0];
        case 4:
          return r ? (n) => P[n >>> 2 >>> 0] : (n) => L[n >>> 2 >>> 0];
        case 8:
          return r ? (n) => oe[n >>> 3] : (n) => ui[n >>> 3];
        default:
          throw new TypeError(`invalid integer width (${t}): ${e}`);
      }
    };
    function Ia(e, t, r, n, _) {
      e >>>= 0, t >>>= 0, r >>>= 0, t = te(t);
      var c = t.indexOf("u") != -1;
      me(e, { name: t, fromWireType: (h) => h, toWireType: function(h, d) {
        if (typeof d != "bigint" && typeof d != "number")
          throw new TypeError(`Cannot convert "${wt(d)}" to ${this.name}`);
        return typeof d == "number" && (d = BigInt(d)), d;
      }, argPackAdvance: pe, readValueFromPointer: Ei(t, r, !c), destructorFunction: null });
    }
    var pe = 8;
    function ya(e, t, r, n) {
      e >>>= 0, t >>>= 0, t = te(t), me(e, { name: t, fromWireType: function(_) {
        return !!_;
      }, toWireType: function(_, c) {
        return c ? r : n;
      }, argPackAdvance: pe, readValueFromPointer: function(_) {
        return this.fromWireType(ne[_ >>> 0]);
      }, destructorFunction: null });
    }
    var Ca = (e) => ({ count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType }), jt = (e) => {
      function t(r) {
        return r.$$.ptrType.registeredClass.name;
      }
      $(t(e) + " instance already deleted");
    }, Yt = !1, Ti = (e) => {
    }, Da = (e) => {
      e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }, Gi = (e) => {
      e.count.value -= 1;
      var t = e.count.value === 0;
      t && Da(e);
    }, bi = (e, t, r) => {
      if (t === r)
        return e;
      if (r.baseClass === void 0)
        return null;
      var n = bi(e, t, r.baseClass);
      return n === null ? null : r.downcast(n);
    }, Ai = {}, Pa = {}, Ea = (e, t) => {
      for (t === void 0 && $("ptr should not be undefined"); e.baseClass; )
        t = e.upcast(t), e = e.baseClass;
      return t;
    }, Ta = (e, t) => (t = Ea(e, t), Pa[t]), It = (e, t) => {
      (!t.ptrType || !t.ptr) && vt("makeClassHandle requires ptr and ptrType");
      var r = !!t.smartPtrType, n = !!t.smartPtr;
      return r !== n && vt("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, ct(Object.create(e, { $$: { value: t, writable: !0 } }));
    };
    function Ga(e) {
      var t = this.getPointee(e);
      if (!t)
        return this.destructor(e), null;
      var r = Ta(this.registeredClass, t);
      if (r !== void 0) {
        if (r.$$.count.value === 0)
          return r.$$.ptr = t, r.$$.smartPtr = e, r.clone();
        var n = r.clone();
        return this.destructor(e), n;
      }
      function _() {
        return this.isSmartPointer ? It(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t, smartPtrType: this, smartPtr: e }) : It(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
      }
      var c = this.registeredClass.getActualType(t), h = Ai[c];
      if (!h)
        return _.call(this);
      var d;
      this.isConst ? d = h.constPointerType : d = h.pointerType;
      var f = bi(t, this.registeredClass, d.registeredClass);
      return f === null ? _.call(this) : this.isSmartPointer ? It(d.registeredClass.instancePrototype, { ptrType: d, ptr: f, smartPtrType: this, smartPtr: e }) : It(d.registeredClass.instancePrototype, { ptrType: d, ptr: f });
    }
    var ct = (e) => typeof FinalizationRegistry > "u" ? (ct = (t) => t, e) : (Yt = new FinalizationRegistry((t) => {
      Gi(t.$$);
    }), ct = (t) => {
      var r = t.$$, n = !!r.smartPtr;
      if (n) {
        var _ = { $$: r };
        Yt.register(t, _, t);
      }
      return t;
    }, Ti = (t) => Yt.unregister(t), ct(e)), ba = () => {
      Object.assign(yt.prototype, { isAliasOf(e) {
        if (!(this instanceof yt) || !(e instanceof yt))
          return !1;
        var t = this.$$.ptrType.registeredClass, r = this.$$.ptr;
        e.$$ = e.$$;
        for (var n = e.$$.ptrType.registeredClass, _ = e.$$.ptr; t.baseClass; )
          r = t.upcast(r), t = t.baseClass;
        for (; n.baseClass; )
          _ = n.upcast(_), n = n.baseClass;
        return t === n && r === _;
      }, clone() {
        if (this.$$.ptr || jt(this), this.$$.preservePointerOnDelete)
          return this.$$.count.value += 1, this;
        var e = ct(Object.create(Object.getPrototypeOf(this), { $$: { value: Ca(this.$$) } }));
        return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
      }, delete() {
        this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), Ti(this), Gi(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
      }, isDeleted() {
        return !this.$$.ptr;
      }, deleteLater() {
        return this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), this.$$.deleteScheduled = !0, this;
      } });
    };
    function yt() {
    }
    var Je = (e, t) => Object.defineProperty(t, "name", { value: e }), Aa = (e, t, r) => {
      if (e[t].overloadTable === void 0) {
        var n = e[t];
        e[t] = function(..._) {
          return e[t].overloadTable.hasOwnProperty(_.length) || $(`Function '${r}' called with an invalid number of arguments (${_.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[_.length].apply(this, _);
        }, e[t].overloadTable = [], e[t].overloadTable[n.argCount] = n;
      }
    }, Vt = (e, t, r) => {
      i.hasOwnProperty(e) ? ((r === void 0 || i[e].overloadTable !== void 0 && i[e].overloadTable[r] !== void 0) && $(`Cannot register public name '${e}' twice`), Aa(i, e, e), i[e].overloadTable.hasOwnProperty(r) && $(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), i[e].overloadTable[r] = t) : (i[e] = t, i[e].argCount = r);
    }, Ra = 48, xa = 57, Fa = (e) => {
      e = e.replace(/[^a-zA-Z0-9_]/g, "$");
      var t = e.charCodeAt(0);
      return t >= Ra && t <= xa ? `_${e}` : e;
    };
    function La(e, t, r, n, _, c, h, d) {
      this.name = e, this.constructor = t, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = _, this.getActualType = c, this.upcast = h, this.downcast = d, this.pureVirtualFunctions = [];
    }
    var Xt = (e, t, r) => {
      for (; t !== r; )
        t.upcast || $(`Expected null or instance of ${r.name}, got an instance of ${t.name}`), e = t.upcast(e), t = t.baseClass;
      return e;
    };
    function Wa(e, t) {
      if (t === null)
        return this.isReference && $(`null is not a valid ${this.name}`), 0;
      t.$$ || $(`Cannot pass "${wt(t)}" as a ${this.name}`), t.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var r = t.$$.ptrType.registeredClass, n = Xt(t.$$.ptr, r, this.registeredClass);
      return n;
    }
    function Ba(e, t) {
      var r;
      if (t === null)
        return this.isReference && $(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), e !== null && e.push(this.rawDestructor, r), r) : 0;
      (!t || !t.$$) && $(`Cannot pass "${wt(t)}" as a ${this.name}`), t.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && t.$$.ptrType.isConst && $(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
      var n = t.$$.ptrType.registeredClass;
      if (r = Xt(t.$$.ptr, n, this.registeredClass), this.isSmartPointer)
        switch (t.$$.smartPtr === void 0 && $("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            t.$$.smartPtrType === this ? r = t.$$.smartPtr : $(`Cannot convert argument of type ${t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name} to parameter type ${this.name}`);
            break;
          case 1:
            r = t.$$.smartPtr;
            break;
          case 2:
            if (t.$$.smartPtrType === this)
              r = t.$$.smartPtr;
            else {
              var _ = t.clone();
              r = this.rawShare(r, ge.toHandle(() => _.delete())), e !== null && e.push(this.rawDestructor, r);
            }
            break;
          default:
            $("Unsupporting sharing policy");
        }
      return r;
    }
    function za(e, t) {
      if (t === null)
        return this.isReference && $(`null is not a valid ${this.name}`), 0;
      t.$$ || $(`Cannot pass "${wt(t)}" as a ${this.name}`), t.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), t.$$.ptrType.isConst && $(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);
      var r = t.$$.ptrType.registeredClass, n = Xt(t.$$.ptr, r, this.registeredClass);
      return n;
    }
    var Na = () => {
      Object.assign(Ct.prototype, { getPointee(e) {
        return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
      }, destructor(e) {
        this.rawDestructor?.(e);
      }, argPackAdvance: pe, readValueFromPointer: ot, fromWireType: Ga });
    };
    function Ct(e, t, r, n, _, c, h, d, f, v, w) {
      this.name = e, this.registeredClass = t, this.isReference = r, this.isConst = n, this.isSmartPointer = _, this.pointeeType = c, this.sharingPolicy = h, this.rawGetPointee = d, this.rawConstructor = f, this.rawShare = v, this.rawDestructor = w, !_ && t.baseClass === void 0 ? n ? (this.toWireType = Wa, this.destructorFunction = null) : (this.toWireType = za, this.destructorFunction = null) : this.toWireType = Ba;
    }
    var Ri = (e, t, r) => {
      i.hasOwnProperty(e) || vt("Replacing nonexistent public symbol"), i[e].overloadTable !== void 0 && r !== void 0 ? i[e].overloadTable[r] = t : (i[e] = t, i[e].argCount = r);
    }, Ha = (e, t, r = []) => {
      var n = W(t)(...r);
      return e[0] == "p" ? n >>> 0 : n;
    }, $a = (e, t) => (...r) => Ha(e, t, r), Se = (e, t) => {
      e = te(e);
      function r() {
        return e.includes("p") ? $a(e, t) : W(t);
      }
      var n = r();
      return typeof n != "function" && $(`unknown function pointer with signature ${e}: ${t}`), n;
    }, Ua = (e, t) => {
      var r = Je(t, function(n) {
        this.name = t, this.message = n;
        var _ = new Error(n).stack;
        _ !== void 0 && (this.stack = this.toString() + `
` + _.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, r;
    }, xi, Fi = (e) => {
      var t = Ji(e), r = te(t);
      return we(t), r;
    }, Li = (e, t) => {
      var r = [], n = {};
      function _(c) {
        if (!n[c] && !Be[c]) {
          if (St[c]) {
            St[c].forEach(_);
            return;
          }
          r.push(c), n[c] = !0;
        }
      }
      throw t.forEach(_), new xi(`${e}: ` + r.map(Fi).join([", "]));
    };
    function ja(e, t, r, n, _, c, h, d, f, v, w, y, C) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, _ >>>= 0, c >>>= 0, h >>>= 0, d >>>= 0, f >>>= 0, v >>>= 0, w >>>= 0, y >>>= 0, C >>>= 0, w = te(w), c = Se(_, c), d &&= Se(h, d), v &&= Se(f, v), C = Se(y, C);
      var D = Fa(w);
      Vt(D, function() {
        Li(`Cannot construct ${w} due to unbound types`, [n]);
      }), Ut([e, t, r], n ? [n] : [], (G) => {
        G = G[0];
        var Y, ie;
        n ? (Y = G.registeredClass, ie = Y.instancePrototype) : ie = yt.prototype;
        var K = Je(w, function(...O) {
          if (Object.getPrototypeOf(this) !== re)
            throw new _t("Use 'new' to construct " + w);
          if (q.constructor_body === void 0)
            throw new _t(w + " has no accessible constructor");
          var nr = q.constructor_body[O.length];
          if (nr === void 0)
            throw new _t(`Tried to invoke ctor of ${w} with invalid number of parameters (${O.length}) - expected (${Object.keys(q.constructor_body).toString()}) parameters instead!`);
          return nr.apply(this, O);
        }), re = Object.create(ie, { constructor: { value: K } });
        K.prototype = re;
        var q = new La(w, K, re, C, Y, c, d, v);
        q.baseClass && (q.baseClass.__derivedClasses ??= [], q.baseClass.__derivedClasses.push(q));
        var ze = new Ct(w, q, !0, !1, !1), ue = new Ct(w + "*", q, !1, !1, !1), Ie = new Ct(w + " const*", q, !1, !0, !1);
        return Ai[e] = { pointerType: ue, constPointerType: Ie }, Ri(D, K), [ze, ue, Ie];
      });
    }
    var qt = [], ve = [];
    function Qt(e) {
      e >>>= 0, e > 9 && --ve[e + 1] === 0 && (ve[e] = void 0, qt.push(e));
    }
    var Ya = () => ve.length / 2 - 5 - qt.length, Va = () => {
      ve.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), i.count_emval_handles = Ya;
    }, ge = { toValue: (e) => (e || $("Cannot use deleted val. handle = " + e), ve[e]), toHandle: (e) => {
      switch (e) {
        case void 0:
          return 2;
        case null:
          return 4;
        case !0:
          return 6;
        case !1:
          return 8;
        default: {
          const t = qt.pop() || ve.length;
          return ve[t] = e, ve[t + 1] = 1, t;
        }
      }
    } }, Xa = { name: "emscripten::val", fromWireType: (e) => {
      var t = ge.toValue(e);
      return Qt(e), t;
    }, toWireType: (e, t) => ge.toHandle(t), argPackAdvance: pe, readValueFromPointer: ot, destructorFunction: null };
    function qa(e) {
      return e >>>= 0, me(e, Xa);
    }
    var Qa = (e, t, r) => {
      switch (t) {
        case 1:
          return r ? function(n) {
            return this.fromWireType(V[n >>> 0]);
          } : function(n) {
            return this.fromWireType(ne[n >>> 0]);
          };
        case 2:
          return r ? function(n) {
            return this.fromWireType(le[n >>> 1 >>> 0]);
          } : function(n) {
            return this.fromWireType(at[n >>> 1 >>> 0]);
          };
        case 4:
          return r ? function(n) {
            return this.fromWireType(P[n >>> 2 >>> 0]);
          } : function(n) {
            return this.fromWireType(L[n >>> 2 >>> 0]);
          };
        default:
          throw new TypeError(`invalid integer width (${t}): ${e}`);
      }
    };
    function Ka(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, t = te(t);
      function _() {
      }
      _.values = {}, me(e, { name: t, constructor: _, fromWireType: function(c) {
        return this.constructor.values[c];
      }, toWireType: (c, h) => h.value, argPackAdvance: pe, readValueFromPointer: Qa(t, r, n), destructorFunction: null }), Vt(t, _);
    }
    var Kt = (e, t) => {
      var r = Be[e];
      return r === void 0 && $(`${t} has unknown type ${Fi(e)}`), r;
    };
    function Oa(e, t, r) {
      e >>>= 0, t >>>= 0;
      var n = Kt(e, "enum");
      t = te(t);
      var _ = n.constructor, c = Object.create(n.constructor.prototype, { value: { value: r }, constructor: { value: Je(`${n.name}_${t}`, function() {
      }) } });
      _.values[r] = c, _[t] = c;
    }
    var Ja = (e, t) => {
      switch (t) {
        case 4:
          return function(r) {
            return this.fromWireType(mt[r >>> 2 >>> 0]);
          };
        case 8:
          return function(r) {
            return this.fromWireType(pt[r >>> 3 >>> 0]);
          };
        default:
          throw new TypeError(`invalid float width (${t}): ${e}`);
      }
    }, Za = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0, t = te(t), me(e, { name: t, fromWireType: (n) => n, toWireType: (n, _) => _, argPackAdvance: pe, readValueFromPointer: Ja(t, r), destructorFunction: null });
    };
    function Wi(e) {
      for (var t = 1; t < e.length; ++t)
        if (e[t] !== null && e[t].destructorFunction === void 0)
          return !0;
      return !1;
    }
    function Bi(e, t) {
      if (!(e instanceof Function))
        throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);
      var r = Je(e.name || "unknownFunctionName", function() {
      });
      r.prototype = e.prototype;
      var n = new r(), _ = e.apply(n, t);
      return _ instanceof Object ? _ : n;
    }
    function en(e, t, r, n) {
      for (var _ = Wi(e), c = e.length - 2, h = [], d = ["fn"], f = 0; f < c; ++f)
        h.push(`arg${f}`), d.push(`arg${f}Wired`);
      h = h.join(","), d = d.join(",");
      var v = `return function (${h}) {
`;
      _ && (v += `var destructors = [];
`);
      for (var w = _ ? "destructors" : "null", y = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], f = 0; f < c; ++f)
        v += `var arg${f}Wired = argType${f}['toWireType'](${w}, arg${f});
`, y.push(`argType${f}`);
      if (v += (r || n ? "var rv = " : "") + `invoker(${d});
`, _)
        v += `runDestructors(destructors);
`;
      else
        for (var f = 2; f < e.length; ++f) {
          var C = f === 1 ? "thisWired" : "arg" + (f - 2) + "Wired";
          e[f].destructorFunction !== null && (v += `${C}_dtor(${C});
`, y.push(`${C}_dtor`));
        }
      return r && (v += `var ret = retType['fromWireType'](rv);
return ret;
`), v += `}
`, [y, v];
    }
    function tn(e, t, r, n, _, c) {
      var h = t.length;
      h < 2 && $("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var d = t[1] !== null && r !== null, f = Wi(t), v = t[0].name !== "void", w = [e, $, n, _, $t, t[0], t[1]], y = 0; y < h - 2; ++y)
        w.push(t[y + 2]);
      if (!f)
        for (var y = 2; y < t.length; ++y)
          t[y].destructorFunction !== null && w.push(t[y].destructorFunction);
      let [C, D] = en(t, d, v, c);
      C.push(D);
      var G = Bi(Function, C)(...w);
      return Je(e, G);
    }
    var rn = (e, t) => {
      for (var r = [], n = 0; n < e; n++)
        r.push(L[t + n * 4 >>> 2 >>> 0]);
      return r;
    }, an = (e) => {
      e = e.trim();
      const t = e.indexOf("(");
      return t !== -1 ? e.substr(0, t) : e;
    };
    function nn(e, t, r, n, _, c, h, d) {
      e >>>= 0, r >>>= 0, n >>>= 0, _ >>>= 0, c >>>= 0;
      var f = rn(t, r);
      e = te(e), e = an(e), _ = Se(n, _), Vt(e, function() {
        Li(`Cannot call ${e} due to unbound types`, f);
      }, t - 1), Ut([], f, (v) => {
        var w = [v[0], null].concat(v.slice(1));
        return Ri(e, tn(e, w, null, _, c, h), t - 1), [];
      });
    }
    function sn(e, t, r, n, _) {
      e >>>= 0, t >>>= 0, r >>>= 0, t = te(t);
      var c = (w) => w;
      if (n === 0) {
        var h = 32 - 8 * r;
        c = (w) => w << h >>> h;
      }
      var d = t.includes("unsigned"), f = (w, y) => {
      }, v;
      d ? v = function(w, y) {
        return f(y, this.name), y >>> 0;
      } : v = function(w, y) {
        return f(y, this.name), y;
      }, me(e, { name: t, fromWireType: c, toWireType: v, argPackAdvance: pe, readValueFromPointer: Ei(t, r, n !== 0), destructorFunction: null });
    }
    function on(e, t, r) {
      e >>>= 0, r >>>= 0;
      var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array], _ = n[t];
      function c(h) {
        var d = L[h >>> 2 >>> 0], f = L[h + 4 >>> 2 >>> 0];
        return new _(V.buffer, f, d);
      }
      r = te(r), me(e, { name: r, fromWireType: c, argPackAdvance: pe, readValueFromPointer: c }, { ignoreDuplicateRegistrations: !0 });
    }
    function _n(e, t) {
      e >>>= 0, t >>>= 0, t = te(t), me(e, { name: t, fromWireType(r) {
        for (var n = L[r >>> 2 >>> 0], _ = r + 4, c, h, d = _, h = 0; h <= n; ++h) {
          var f = _ + h;
          if (h == n || ne[f >>> 0] == 0) {
            var v = f - d, w = Ht(d, v);
            c === void 0 ? c = w : (c += "\0", c += w), d = f + 1;
          }
        }
        return we(r), c;
      }, toWireType(r, n) {
        n instanceof ArrayBuffer && (n = new Uint8Array(n));
        var _, c = typeof n == "string";
        c || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Int8Array || $("Cannot pass non-string to std::string"), c ? _ = Qe(n) : _ = n.length;
        var h = Zt(4 + _ + 1), d = h + 4;
        if (L[h >>> 2 >>> 0] = _, c)
          ke(n, d, _ + 1);
        else if (c)
          for (var f = 0; f < _; ++f) {
            var v = n.charCodeAt(f);
            v > 255 && (we(d), $("String has UTF-16 code units that do not fit in 8 bits")), ne[d + f >>> 0] = v;
          }
        else
          for (var f = 0; f < _; ++f)
            ne[d + f >>> 0] = n[f];
        return r !== null && r.push(we, h), h;
      }, argPackAdvance: pe, readValueFromPointer: ot, destructorFunction(r) {
        we(r);
      } });
    }
    var zi = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, cn = (e, t) => {
      for (var r = e, n = r >> 1, _ = n + t / 2; !(n >= _) && at[n >>> 0]; ) ++n;
      if (r = n << 1, r - e > 32 && zi) return zi.decode(ne.subarray(e >>> 0, r >>> 0));
      for (var c = "", h = 0; !(h >= t / 2); ++h) {
        var d = le[e + h * 2 >>> 1 >>> 0];
        if (d == 0) break;
        c += String.fromCharCode(d);
      }
      return c;
    }, ln = (e, t, r) => {
      if (r ??= 2147483647, r < 2) return 0;
      r -= 2;
      for (var n = t, _ = r < e.length * 2 ? r / 2 : e.length, c = 0; c < _; ++c) {
        var h = e.charCodeAt(c);
        le[t >>> 1 >>> 0] = h, t += 2;
      }
      return le[t >>> 1 >>> 0] = 0, t - n;
    }, gn = (e) => e.length * 2, un = (e, t) => {
      for (var r = 0, n = ""; !(r >= t / 4); ) {
        var _ = P[e + r * 4 >>> 2 >>> 0];
        if (_ == 0) break;
        if (++r, _ >= 65536) {
          var c = _ - 65536;
          n += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else
          n += String.fromCharCode(_);
      }
      return n;
    }, hn = (e, t, r) => {
      if (t >>>= 0, r ??= 2147483647, r < 4) return 0;
      for (var n = t, _ = n + r - 4, c = 0; c < e.length; ++c) {
        var h = e.charCodeAt(c);
        if (h >= 55296 && h <= 57343) {
          var d = e.charCodeAt(++c);
          h = 65536 + ((h & 1023) << 10) | d & 1023;
        }
        if (P[t >>> 2 >>> 0] = h, t += 4, t + 4 > _) break;
      }
      return P[t >>> 2 >>> 0] = 0, t - n;
    }, dn = (e) => {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n >= 55296 && n <= 57343 && ++r, t += 4;
      }
      return t;
    }, mn = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0, r = te(r);
      var n, _, c, h;
      t === 2 ? (n = cn, _ = ln, h = gn, c = (d) => at[d >>> 1 >>> 0]) : t === 4 && (n = un, _ = hn, h = dn, c = (d) => L[d >>> 2 >>> 0]), me(e, { name: r, fromWireType: (d) => {
        for (var f = L[d >>> 2 >>> 0], v, w = d + 4, y = 0; y <= f; ++y) {
          var C = d + 4 + y * t;
          if (y == f || c(C) == 0) {
            var D = C - w, G = n(w, D);
            v === void 0 ? v = G : (v += "\0", v += G), w = C + t;
          }
        }
        return we(d), v;
      }, toWireType: (d, f) => {
        typeof f != "string" && $(`Cannot pass non-string to C++ string type ${r}`);
        var v = h(f), w = Zt(4 + v + t);
        return L[w >>> 2 >>> 0] = v / t, _(f, w + 4, v + t), d !== null && d.push(we, w), w;
      }, argPackAdvance: pe, readValueFromPointer: ot, destructorFunction(d) {
        we(d);
      } });
    };
    function pn(e, t, r, n, _, c) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, _ >>>= 0, c >>>= 0, kt[e] = { name: te(t), rawConstructor: Se(r, n), rawDestructor: Se(_, c), fields: [] };
    }
    function fn(e, t, r, n, _, c, h, d, f, v) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, _ >>>= 0, c >>>= 0, h >>>= 0, d >>>= 0, f >>>= 0, v >>>= 0, kt[e].fields.push({ fieldName: te(t), getterReturnType: r, getter: Se(n, _), getterContext: c, setterArgumentType: h, setter: Se(d, f), setterContext: v });
    }
    var Mn = function(e, t) {
      e >>>= 0, t >>>= 0, t = te(t), me(e, { isVoid: !0, name: t, argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (r, n) => {
      } });
    }, Ni = 0, kn = () => {
      Si = !1, Ni = 0;
    };
    function Sn(e) {
      return e >>>= 0, e ? -52 : 0;
    }
    var vn = () => {
      throw 1 / 0;
    }, wn = {}, Hi = (e) => {
      var t = wn[e];
      return t === void 0 ? te(e) : t;
    }, Ot = [];
    function In(e, t, r, n, _) {
      return e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, _ >>>= 0, e = Ot[e], t = ge.toValue(t), r = Hi(r), e(t, t[r], n, _);
    }
    var yn = (e) => {
      var t = Ot.length;
      return Ot.push(e), t;
    }, Cn = (e, t) => {
      for (var r = new Array(e), n = 0; n < e; ++n)
        r[n] = Kt(L[t + n * 4 >>> 2 >>> 0], "parameter " + n);
      return r;
    }, Dn = (e, t, r) => {
      var n = [], _ = e.toWireType(n, r);
      return n.length && (L[t >>> 2 >>> 0] = ge.toHandle(n)), _;
    };
    function Pn(e, t, r) {
      t >>>= 0;
      var n = Cn(e, t), _ = n.shift();
      e--;
      var c = `return function (obj, func, destructorsRef, args) {
`, h = 0, d = [];
      r === 0 && d.push("obj");
      for (var f = ["retType"], v = [_], w = 0; w < e; ++w)
        d.push("arg" + w), f.push("argType" + w), v.push(n[w]), c += `  var arg${w} = argType${w}.readValueFromPointer(args${h ? "+" + h : ""});
`, h += n[w].argPackAdvance;
      var y = r === 1 ? "new func" : "func.call";
      c += `  var rv = ${y}(${d.join(", ")});
`, _.isVoid || (f.push("emval_returnValue"), v.push(Dn), c += `  return emval_returnValue(retType, destructorsRef, rv);
`), c += `};
`, f.push(c);
      var C = Bi(Function, f)(...v), D = `methodCaller<(${n.map((G) => G.name).join(", ")}) => ${_.name}>`;
      return yn(Je(D, C));
    }
    function En(e) {
      e >>>= 0, e > 9 && (ve[e + 1] += 1);
    }
    function Tn() {
      return ge.toHandle([]);
    }
    function Gn(e) {
      return e >>>= 0, ge.toHandle(Hi(e));
    }
    function bn() {
      return ge.toHandle({});
    }
    function An(e) {
      e >>>= 0;
      var t = ge.toValue(e);
      $t(t), Qt(e);
    }
    function Rn(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0, e = ge.toValue(e), t = ge.toValue(t), r = ge.toValue(r), e[t] = r;
    }
    function xn(e, t) {
      e >>>= 0, t >>>= 0, e = Kt(e, "_emval_take_value");
      var r = e.readValueFromPointer(t);
      return ge.toHandle(r);
    }
    function Fn(e, t) {
      e = Me(e), t >>>= 0;
      var r = new Date(e * 1e3);
      P[t >>> 2 >>> 0] = r.getUTCSeconds(), P[t + 4 >>> 2 >>> 0] = r.getUTCMinutes(), P[t + 8 >>> 2 >>> 0] = r.getUTCHours(), P[t + 12 >>> 2 >>> 0] = r.getUTCDate(), P[t + 16 >>> 2 >>> 0] = r.getUTCMonth(), P[t + 20 >>> 2 >>> 0] = r.getUTCFullYear() - 1900, P[t + 24 >>> 2 >>> 0] = r.getUTCDay();
      var n = Date.UTC(r.getUTCFullYear(), 0, 1, 0, 0, 0, 0), _ = (r.getTime() - n) / (1e3 * 60 * 60 * 24) | 0;
      P[t + 28 >>> 2 >>> 0] = _;
    }
    var Ln = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), Wn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Bn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], $i = (e) => {
      var t = Ln(e.getFullYear()), r = t ? Wn : Bn, n = r[e.getMonth()] + e.getDate() - 1;
      return n;
    };
    function zn(e, t) {
      e = Me(e), t >>>= 0;
      var r = new Date(e * 1e3);
      P[t >>> 2 >>> 0] = r.getSeconds(), P[t + 4 >>> 2 >>> 0] = r.getMinutes(), P[t + 8 >>> 2 >>> 0] = r.getHours(), P[t + 12 >>> 2 >>> 0] = r.getDate(), P[t + 16 >>> 2 >>> 0] = r.getMonth(), P[t + 20 >>> 2 >>> 0] = r.getFullYear() - 1900, P[t + 24 >>> 2 >>> 0] = r.getDay();
      var n = $i(r) | 0;
      P[t + 28 >>> 2 >>> 0] = n, P[t + 36 >>> 2 >>> 0] = -(r.getTimezoneOffset() * 60);
      var _ = new Date(r.getFullYear(), 0, 1), c = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), h = _.getTimezoneOffset(), d = (c != h && r.getTimezoneOffset() == Math.min(h, c)) | 0;
      P[t + 32 >>> 2 >>> 0] = d;
    }
    var Nn = function(e) {
      e >>>= 0;
      var t = (() => {
        var r = new Date(P[e + 20 >>> 2 >>> 0] + 1900, P[e + 16 >>> 2 >>> 0], P[e + 12 >>> 2 >>> 0], P[e + 8 >>> 2 >>> 0], P[e + 4 >>> 2 >>> 0], P[e >>> 2 >>> 0], 0), n = P[e + 32 >>> 2 >>> 0], _ = r.getTimezoneOffset(), c = new Date(r.getFullYear(), 0, 1), h = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), d = c.getTimezoneOffset(), f = Math.min(d, h);
        if (n < 0)
          P[e + 32 >>> 2 >>> 0] = +(h != d && f == _);
        else if (n > 0 != (f == _)) {
          var v = Math.max(d, h), w = n > 0 ? f : v;
          r.setTime(r.getTime() + (w - _) * 6e4);
        }
        P[e + 24 >>> 2 >>> 0] = r.getDay();
        var y = $i(r) | 0;
        P[e + 28 >>> 2 >>> 0] = y, P[e >>> 2 >>> 0] = r.getSeconds(), P[e + 4 >>> 2 >>> 0] = r.getMinutes(), P[e + 8 >>> 2 >>> 0] = r.getHours(), P[e + 12 >>> 2 >>> 0] = r.getDate(), P[e + 16 >>> 2 >>> 0] = r.getMonth(), P[e + 20 >>> 2 >>> 0] = r.getYear();
        var C = r.getTime();
        return isNaN(C) ? -1 : C / 1e3;
      })();
      return BigInt(t);
    };
    function Hn(e, t, r, n, _, c, h) {
      e >>>= 0, _ = Me(_), c >>>= 0, h >>>= 0;
      try {
        if (isNaN(_)) return 61;
        var d = A.getStreamFromFD(n), f = u.mmap(d, e, _, t, r), v = f.ptr;
        return P[c >>> 2 >>> 0] = f.allocated, L[h >>> 2 >>> 0] = v, 0;
      } catch (w) {
        if (typeof u > "u" || w.name !== "ErrnoError") throw w;
        return -w.errno;
      }
    }
    function $n(e, t, r, n, _, c) {
      e >>>= 0, t >>>= 0, c = Me(c);
      try {
        var h = A.getStreamFromFD(_);
        r & 2 && A.doMsync(e, h, t, n, c);
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    var Un = function(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0;
      var _ = (/* @__PURE__ */ new Date()).getFullYear(), c = new Date(_, 0, 1), h = new Date(_, 6, 1), d = c.getTimezoneOffset(), f = h.getTimezoneOffset(), v = Math.max(d, f);
      L[e >>> 2 >>> 0] = v * 60, P[t >>> 2 >>> 0] = +(d != f);
      var w = (D) => {
        var G = D >= 0 ? "-" : "+", Y = Math.abs(D), ie = String(Math.floor(Y / 60)).padStart(2, "0"), K = String(Y % 60).padStart(2, "0");
        return `UTC${G}${ie}${K}`;
      }, y = w(d), C = w(f);
      f < d ? (ke(y, r, 17), ke(C, n, 17)) : (ke(y, n, 17), ke(C, r, 17));
    }, Ui = () => performance.now(), ji = () => Date.now(), jn = (e) => e >= 0 && e <= 3;
    function Yn(e, t, r) {
      if (r >>>= 0, !jn(e))
        return 28;
      var n;
      e === 0 ? n = ji() : n = Ui();
      var _ = Math.round(n * 1e3 * 1e3);
      return oe[r >>> 3] = BigInt(_), 0;
    }
    var Yi = () => 4294901760;
    function Vn() {
      return Yi();
    }
    var Xn = (e) => {
      var t = dt.buffer, r = (e - t.byteLength + 65535) / 65536 | 0;
      try {
        return dt.grow(r), hi(), 1;
      } catch {
      }
    };
    function qn(e) {
      e >>>= 0;
      var t = ne.length, r = Yi();
      if (e > r)
        return !1;
      for (var n = 1; n <= 4; n *= 2) {
        var _ = t * (1 + 0.2 / n);
        _ = Math.min(_, e + 100663296);
        var c = Math.min(r, yi(Math.max(e, _), 65536)), h = Xn(c);
        if (h)
          return !0;
      }
      return !1;
    }
    var Jt = {}, Qn = () => B || "./this.program", lt = () => {
      if (!lt.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: Qn() };
        for (var r in Jt)
          Jt[r] === void 0 ? delete t[r] : t[r] = Jt[r];
        var n = [];
        for (var r in t)
          n.push(`${r}=${t[r]}`);
        lt.strings = n;
      }
      return lt.strings;
    }, Kn = (e, t) => {
      for (var r = 0; r < e.length; ++r)
        V[t++ >>> 0] = e.charCodeAt(r);
      V[t >>> 0] = 0;
    }, On = function(e, t) {
      e >>>= 0, t >>>= 0;
      var r = 0;
      return lt().forEach((n, _) => {
        var c = t + r;
        L[e + _ * 4 >>> 2 >>> 0] = c, Kn(n, c), r += n.length + 1;
      }), 0;
    }, Jn = function(e, t) {
      e >>>= 0, t >>>= 0;
      var r = lt();
      L[e >>> 2 >>> 0] = r.length;
      var n = 0;
      return r.forEach((_) => n += _.length + 1), L[t >>> 2 >>> 0] = n, 0;
    }, Zn = () => Si || Ni > 0, Vi = (e) => {
      Zn() || (i.onExit?.(e), Rt = !0), J(e, new Lr(e));
    }, es = (e, t) => {
      Vi(e);
    }, ts = es;
    function is(e) {
      try {
        var t = A.getStreamFromFD(e);
        return u.close(t), 0;
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    function rs(e, t) {
      t >>>= 0;
      try {
        var r = 0, n = 0, _ = 0, c = A.getStreamFromFD(e), h = c.tty ? 2 : u.isDir(c.mode) ? 3 : u.isLink(c.mode) ? 7 : 4;
        return V[t >>> 0] = h, le[t + 2 >>> 1 >>> 0] = _, oe[t + 8 >>> 3] = BigInt(r), oe[t + 16 >>> 3] = BigInt(n), 0;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return d.errno;
      }
    }
    var Xi = (e, t, r, n) => {
      for (var _ = 0, c = 0; c < r; c++) {
        var h = L[t >>> 2 >>> 0], d = L[t + 4 >>> 2 >>> 0];
        t += 8;
        var f = u.read(e, V, h, d, n);
        if (f < 0) return -1;
        if (_ += f, f < d) break;
        typeof n < "u" && (n += f);
      }
      return _;
    };
    function as(e, t, r, n, _) {
      t >>>= 0, r >>>= 0, n = Me(n), _ >>>= 0;
      try {
        if (isNaN(n)) return 61;
        var c = A.getStreamFromFD(e), h = Xi(c, t, r, n);
        return L[_ >>> 2 >>> 0] = h, 0;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return d.errno;
      }
    }
    var qi = (e, t, r, n) => {
      for (var _ = 0, c = 0; c < r; c++) {
        var h = L[t >>> 2 >>> 0], d = L[t + 4 >>> 2 >>> 0];
        t += 8;
        var f = u.write(e, V, h, d, n);
        if (f < 0) return -1;
        if (_ += f, f < d)
          break;
        typeof n < "u" && (n += f);
      }
      return _;
    };
    function ns(e, t, r, n, _) {
      t >>>= 0, r >>>= 0, n = Me(n), _ >>>= 0;
      try {
        if (isNaN(n)) return 61;
        var c = A.getStreamFromFD(e), h = qi(c, t, r, n);
        return L[_ >>> 2 >>> 0] = h, 0;
      } catch (d) {
        if (typeof u > "u" || d.name !== "ErrnoError") throw d;
        return d.errno;
      }
    }
    function ss(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        var _ = A.getStreamFromFD(e), c = Xi(_, t, r);
        return L[n >>> 2 >>> 0] = c, 0;
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return h.errno;
      }
    }
    function os(e, t, r, n) {
      t = Me(t), n >>>= 0;
      try {
        if (isNaN(t)) return 61;
        var _ = A.getStreamFromFD(e);
        return u.llseek(_, t, r), oe[n >>> 3] = BigInt(_.position), _.getdents && t === 0 && r === 0 && (_.getdents = null), 0;
      } catch (c) {
        if (typeof u > "u" || c.name !== "ErrnoError") throw c;
        return c.errno;
      }
    }
    function _s(e) {
      try {
        var t = A.getStreamFromFD(e);
        return t.stream_ops?.fsync ? t.stream_ops.fsync(t) : 0;
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    function cs(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        var _ = A.getStreamFromFD(e), c = qi(_, t, r);
        return L[n >>> 2 >>> 0] = c, 0;
      } catch (h) {
        if (typeof u > "u" || h.name !== "ErrnoError") throw h;
        return h.errno;
      }
    }
    function ls(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return Wt(ne.subarray(e >>> 0, e + t >>> 0)), 0;
      } catch (r) {
        if (typeof u > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    var Qi = (e, t) => {
      e < 128 ? t.push(e) : t.push(e % 128 | 128, e >> 7);
    }, gs = (e) => {
      for (var t = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, r = { parameters: [], results: e[0] == "v" ? [] : [t[e[0]]] }, n = 1; n < e.length; ++n)
        r.parameters.push(t[e[n]]);
      return r;
    }, us = (e, t) => {
      var r = e.slice(0, 1), n = e.slice(1), _ = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      t.push(96), Qi(n.length, t);
      for (var c = 0; c < n.length; ++c)
        t.push(_[n[c]]);
      r == "v" ? t.push(0) : t.push(1, _[r]);
    }, hs = (e, t) => {
      if (typeof WebAssembly.Function == "function")
        return new WebAssembly.Function(gs(t), e);
      var r = [1];
      us(t, r);
      var n = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      Qi(r.length, n), n.push(...r), n.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var _ = new WebAssembly.Module(new Uint8Array(n)), c = new WebAssembly.Instance(_, { e: { f: e } }), h = c.exports.f;
      return h;
    }, ds = (e, t) => {
      if (Ze)
        for (var r = e; r < e + t; r++) {
          var n = W(r);
          n && Ze.set(n, r);
        }
    }, Ze, ms = (e) => (Ze || (Ze = /* @__PURE__ */ new WeakMap(), ds(0, Le.length)), Ze.get(e) || 0), Ki = [], ps = () => {
      if (Ki.length)
        return Ki.pop();
      try {
        Le.grow(1);
      } catch (e) {
        throw e instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : e;
      }
      return Le.length - 1;
    }, Oi = (e, t) => {
      Le.set(e, t), st[e] = Le.get(e);
    }, fs = (e, t) => {
      var r = ms(e);
      if (r)
        return r;
      var n = ps();
      try {
        Oi(n, e);
      } catch (c) {
        if (!(c instanceof TypeError))
          throw c;
        var _ = hs(e, t);
        Oi(n, _);
      }
      return Ze.set(e, n), n;
    };
    u.createPreloadedFile = Zr, u.staticInit(), x.doesNotExistError = new u.ErrnoError(44), x.doesNotExistError.stack = "<generic error, no stack>", Di = i.InternalError = class extends Error {
      constructor(t) {
        super(t), this.name = "InternalError";
      }
    }, va(), _t = i.BindingError = class extends Error {
      constructor(t) {
        super(t), this.name = "BindingError";
      }
    }, ba(), Na(), xi = i.UnboundTypeError = Ua(Error, "UnboundTypeError"), Va();
    var Ms = { _: Hr, B: jr, a: Yr, A: $r, ua: ta, va: ia, ca: ra, sa: aa, F: na, ra: sa, ma: oa, Z: _a, ya: ca, oa: la, pa: ga, D: ua, Y: ha, _a: da, $a: ma, qa: pa, Za: fa, X: Ma, wa: ka, Na: Sa, P: Ia, Ha: ya, I: ja, Fa: qa, w: Ka, e: Oa, O: Za, p: nn, v: sn, n: on, Ga: _n, G: mn, Oa: pn, H: fn, Ia: Mn, $: kn, Xa: Sn, Va: vn, Ka: In, l: Qt, La: Pn, Ma: En, Q: Tn, u: Gn, z: bn, Ja: An, r: Rn, o: xn, fa: Fn, ha: zn, ia: Nn, da: Hn, ea: $n, ja: Un, ta: Yn, L: ji, Ya: Vn, C: Ui, Wa: qn, za: On, Aa: Jn, x: ts, y: is, K: rs, ba: as, aa: ns, M: ss, ka: os, na: _s, E: cs, Sa: Ls, J: As, c: ws, d: vs, f: Ss, i: Ds, W: Fs, b: Gs, U: zs, m: Ts, Ra: Ns, Qa: Us, Ea: Xs, Da: qs, q: bs, Ua: Rs, t: Es, ga: Ps, V: Ws, k: Is, h: ys, T: Hs, S: $s, j: ks, g: Cs, s: Bs, Pa: Ys, N: Vs, Ca: Qs, R: js, Ba: Ks, Ta: xs, xa: Vi, la: ls }, o;
    Fr();
    var Ji = (e) => (Ji = o.cb)(e);
    i._MagickColor_Create = () => (i._MagickColor_Create = o.db)(), i._MagickColor_Dispose = (e) => (i._MagickColor_Dispose = o.eb)(e), i._MagickColor_Count_Get = (e) => (i._MagickColor_Count_Get = o.fb)(e), i._MagickColor_Red_Get = (e) => (i._MagickColor_Red_Get = o.gb)(e), i._MagickColor_Red_Set = (e, t) => (i._MagickColor_Red_Set = o.hb)(e, t), i._MagickColor_Green_Get = (e) => (i._MagickColor_Green_Get = o.ib)(e), i._MagickColor_Green_Set = (e, t) => (i._MagickColor_Green_Set = o.jb)(e, t), i._MagickColor_Blue_Get = (e) => (i._MagickColor_Blue_Get = o.kb)(e), i._MagickColor_Blue_Set = (e, t) => (i._MagickColor_Blue_Set = o.lb)(e, t), i._MagickColor_Alpha_Get = (e) => (i._MagickColor_Alpha_Get = o.mb)(e), i._MagickColor_Alpha_Set = (e, t) => (i._MagickColor_Alpha_Set = o.nb)(e, t), i._MagickColor_Black_Get = (e) => (i._MagickColor_Black_Get = o.ob)(e), i._MagickColor_Black_Set = (e, t) => (i._MagickColor_Black_Set = o.pb)(e, t), i._MagickColor_IsCMYK_Get = (e) => (i._MagickColor_IsCMYK_Get = o.qb)(e), i._MagickColor_IsCMYK_Set = (e, t) => (i._MagickColor_IsCMYK_Set = o.rb)(e, t), i._MagickColor_Clone = (e) => (i._MagickColor_Clone = o.sb)(e), i._MagickColor_FuzzyEquals = (e, t, r) => (i._MagickColor_FuzzyEquals = o.tb)(e, t, r), i._MagickColor_Initialize = (e, t) => (i._MagickColor_Initialize = o.ub)(e, t), i._MagickColorCollection_DisposeList = (e) => (i._MagickColorCollection_DisposeList = o.wb)(e), i._MagickColorCollection_GetInstance = (e, t) => (i._MagickColorCollection_GetInstance = o.xb)(e, t), i._DrawingWand_Create = (e, t) => (i._DrawingWand_Create = o.yb)(e, t), i._DrawingWand_Dispose = (e) => (i._DrawingWand_Dispose = o.zb)(e), i._DrawingWand_Affine = (e, t, r, n, _, c, h, d) => (i._DrawingWand_Affine = o.Ab)(e, t, r, n, _, c, h, d), i._DrawingWand_Alpha = (e, t, r, n, _) => (i._DrawingWand_Alpha = o.Bb)(e, t, r, n, _), i._DrawingWand_Arc = (e, t, r, n, _, c, h, d) => (i._DrawingWand_Arc = o.Cb)(e, t, r, n, _, c, h, d), i._DrawingWand_Bezier = (e, t, r, n) => (i._DrawingWand_Bezier = o.Db)(e, t, r, n), i._DrawingWand_BorderColor = (e, t, r) => (i._DrawingWand_BorderColor = o.Eb)(e, t, r), i._DrawingWand_Circle = (e, t, r, n, _, c) => (i._DrawingWand_Circle = o.Fb)(e, t, r, n, _, c), i._DrawingWand_ClipPath = (e, t, r) => (i._DrawingWand_ClipPath = o.Gb)(e, t, r), i._DrawingWand_ClipRule = (e, t, r) => (i._DrawingWand_ClipRule = o.Hb)(e, t, r), i._DrawingWand_ClipUnits = (e, t, r) => (i._DrawingWand_ClipUnits = o.Ib)(e, t, r), i._DrawingWand_Color = (e, t, r, n, _) => (i._DrawingWand_Color = o.Jb)(e, t, r, n, _), i._DrawingWand_Composite = (e, t, r, n, _, c, h, d) => (i._DrawingWand_Composite = o.Kb)(e, t, r, n, _, c, h, d), i._DrawingWand_Density = (e, t, r) => (i._DrawingWand_Density = o.Lb)(e, t, r), i._DrawingWand_Ellipse = (e, t, r, n, _, c, h, d) => (i._DrawingWand_Ellipse = o.Mb)(e, t, r, n, _, c, h, d), i._DrawingWand_FillColor = (e, t, r) => (i._DrawingWand_FillColor = o.Nb)(e, t, r), i._DrawingWand_FillOpacity = (e, t, r) => (i._DrawingWand_FillOpacity = o.Ob)(e, t, r), i._DrawingWand_FillPatternUrl = (e, t, r) => (i._DrawingWand_FillPatternUrl = o.Pb)(e, t, r), i._DrawingWand_FillRule = (e, t, r) => (i._DrawingWand_FillRule = o.Qb)(e, t, r), i._DrawingWand_Font = (e, t, r) => (i._DrawingWand_Font = o.Rb)(e, t, r), i._DrawingWand_FontFamily = (e, t, r, n, _, c) => (i._DrawingWand_FontFamily = o.Sb)(e, t, r, n, _, c), i._DrawingWand_FontPointSize = (e, t, r) => (i._DrawingWand_FontPointSize = o.Tb)(e, t, r), i._DrawingWand_FontTypeMetrics = (e, t, r, n) => (i._DrawingWand_FontTypeMetrics = o.Ub)(e, t, r, n), i._TypeMetric_Create = () => (i._TypeMetric_Create = o.Vb)(), i._DrawingWand_Gravity = (e, t, r) => (i._DrawingWand_Gravity = o.Wb)(e, t, r), i._DrawingWand_Line = (e, t, r, n, _, c) => (i._DrawingWand_Line = o.Xb)(e, t, r, n, _, c), i._DrawingWand_PathArcAbs = (e, t, r, n, _, c, h, d, f) => (i._DrawingWand_PathArcAbs = o.Yb)(e, t, r, n, _, c, h, d, f), i._DrawingWand_PathArcRel = (e, t, r, n, _, c, h, d, f) => (i._DrawingWand_PathArcRel = o.Zb)(e, t, r, n, _, c, h, d, f), i._DrawingWand_PathClose = (e, t) => (i._DrawingWand_PathClose = o._b)(e, t), i._DrawingWand_PathCurveToAbs = (e, t, r, n, _, c, h, d) => (i._DrawingWand_PathCurveToAbs = o.$b)(e, t, r, n, _, c, h, d), i._DrawingWand_PathCurveToRel = (e, t, r, n, _, c, h, d) => (i._DrawingWand_PathCurveToRel = o.ac)(e, t, r, n, _, c, h, d), i._DrawingWand_PathFinish = (e, t) => (i._DrawingWand_PathFinish = o.bc)(e, t), i._DrawingWand_PathLineToAbs = (e, t, r, n) => (i._DrawingWand_PathLineToAbs = o.cc)(e, t, r, n), i._DrawingWand_PathLineToHorizontalAbs = (e, t, r) => (i._DrawingWand_PathLineToHorizontalAbs = o.dc)(e, t, r), i._DrawingWand_PathLineToHorizontalRel = (e, t, r) => (i._DrawingWand_PathLineToHorizontalRel = o.ec)(e, t, r), i._DrawingWand_PathLineToRel = (e, t, r, n) => (i._DrawingWand_PathLineToRel = o.fc)(e, t, r, n), i._DrawingWand_PathLineToVerticalAbs = (e, t, r) => (i._DrawingWand_PathLineToVerticalAbs = o.gc)(e, t, r), i._DrawingWand_PathLineToVerticalRel = (e, t, r) => (i._DrawingWand_PathLineToVerticalRel = o.hc)(e, t, r), i._DrawingWand_PathMoveToAbs = (e, t, r, n) => (i._DrawingWand_PathMoveToAbs = o.ic)(e, t, r, n), i._DrawingWand_PathMoveToRel = (e, t, r, n) => (i._DrawingWand_PathMoveToRel = o.jc)(e, t, r, n), i._DrawingWand_PathQuadraticCurveToAbs = (e, t, r, n, _, c) => (i._DrawingWand_PathQuadraticCurveToAbs = o.kc)(e, t, r, n, _, c), i._DrawingWand_PathQuadraticCurveToRel = (e, t, r, n, _, c) => (i._DrawingWand_PathQuadraticCurveToRel = o.lc)(e, t, r, n, _, c), i._DrawingWand_PathSmoothCurveToAbs = (e, t, r, n, _, c) => (i._DrawingWand_PathSmoothCurveToAbs = o.mc)(e, t, r, n, _, c), i._DrawingWand_PathSmoothCurveToRel = (e, t, r, n, _, c) => (i._DrawingWand_PathSmoothCurveToRel = o.nc)(e, t, r, n, _, c), i._DrawingWand_PathSmoothQuadraticCurveToAbs = (e, t, r, n) => (i._DrawingWand_PathSmoothQuadraticCurveToAbs = o.oc)(e, t, r, n), i._DrawingWand_PathSmoothQuadraticCurveToRel = (e, t, r, n) => (i._DrawingWand_PathSmoothQuadraticCurveToRel = o.pc)(e, t, r, n), i._DrawingWand_PathStart = (e, t) => (i._DrawingWand_PathStart = o.qc)(e, t), i._DrawingWand_Point = (e, t, r, n) => (i._DrawingWand_Point = o.rc)(e, t, r, n), i._DrawingWand_Polygon = (e, t, r, n) => (i._DrawingWand_Polygon = o.sc)(e, t, r, n), i._DrawingWand_Polyline = (e, t, r, n) => (i._DrawingWand_Polyline = o.tc)(e, t, r, n), i._DrawingWand_PopClipPath = (e, t) => (i._DrawingWand_PopClipPath = o.uc)(e, t), i._DrawingWand_PopGraphicContext = (e, t) => (i._DrawingWand_PopGraphicContext = o.vc)(e, t), i._DrawingWand_PopPattern = (e, t) => (i._DrawingWand_PopPattern = o.wc)(e, t), i._DrawingWand_PushClipPath = (e, t, r) => (i._DrawingWand_PushClipPath = o.xc)(e, t, r), i._DrawingWand_PushGraphicContext = (e, t) => (i._DrawingWand_PushGraphicContext = o.yc)(e, t), i._DrawingWand_PushPattern = (e, t, r, n, _, c, h) => (i._DrawingWand_PushPattern = o.zc)(e, t, r, n, _, c, h), i._DrawingWand_Rectangle = (e, t, r, n, _, c) => (i._DrawingWand_Rectangle = o.Ac)(e, t, r, n, _, c), i._DrawingWand_Render = (e, t) => (i._DrawingWand_Render = o.Bc)(e, t), i._DrawingWand_Rotation = (e, t, r) => (i._DrawingWand_Rotation = o.Cc)(e, t, r), i._DrawingWand_RoundRectangle = (e, t, r, n, _, c, h, d) => (i._DrawingWand_RoundRectangle = o.Dc)(e, t, r, n, _, c, h, d), i._DrawingWand_Scaling = (e, t, r, n) => (i._DrawingWand_Scaling = o.Ec)(e, t, r, n), i._DrawingWand_SkewX = (e, t, r) => (i._DrawingWand_SkewX = o.Fc)(e, t, r), i._DrawingWand_SkewY = (e, t, r) => (i._DrawingWand_SkewY = o.Gc)(e, t, r), i._DrawingWand_StrokeAntialias = (e, t, r) => (i._DrawingWand_StrokeAntialias = o.Hc)(e, t, r), i._DrawingWand_StrokeColor = (e, t, r) => (i._DrawingWand_StrokeColor = o.Ic)(e, t, r), i._DrawingWand_StrokeDashArray = (e, t, r, n) => (i._DrawingWand_StrokeDashArray = o.Jc)(e, t, r, n), i._DrawingWand_StrokeDashOffset = (e, t, r) => (i._DrawingWand_StrokeDashOffset = o.Kc)(e, t, r), i._DrawingWand_StrokeLineCap = (e, t, r) => (i._DrawingWand_StrokeLineCap = o.Lc)(e, t, r), i._DrawingWand_StrokeLineJoin = (e, t, r) => (i._DrawingWand_StrokeLineJoin = o.Mc)(e, t, r), i._DrawingWand_StrokeMiterLimit = (e, t, r) => (i._DrawingWand_StrokeMiterLimit = o.Nc)(e, t, r), i._DrawingWand_StrokeOpacity = (e, t, r) => (i._DrawingWand_StrokeOpacity = o.Oc)(e, t, r), i._DrawingWand_StrokePatternUrl = (e, t, r) => (i._DrawingWand_StrokePatternUrl = o.Pc)(e, t, r), i._DrawingWand_StrokeWidth = (e, t, r) => (i._DrawingWand_StrokeWidth = o.Qc)(e, t, r), i._DrawingWand_Text = (e, t, r, n, _) => (i._DrawingWand_Text = o.Rc)(e, t, r, n, _), i._DrawingWand_TextAlignment = (e, t, r) => (i._DrawingWand_TextAlignment = o.Sc)(e, t, r), i._DrawingWand_TextAntialias = (e, t, r) => (i._DrawingWand_TextAntialias = o.Tc)(e, t, r), i._DrawingWand_TextDecoration = (e, t, r) => (i._DrawingWand_TextDecoration = o.Uc)(e, t, r), i._DrawingWand_TextDirection = (e, t, r) => (i._DrawingWand_TextDirection = o.Vc)(e, t, r), i._DrawingWand_TextEncoding = (e, t, r) => (i._DrawingWand_TextEncoding = o.Wc)(e, t, r), i._DrawingWand_TextInterlineSpacing = (e, t, r) => (i._DrawingWand_TextInterlineSpacing = o.Xc)(e, t, r), i._DrawingWand_TextInterwordSpacing = (e, t, r) => (i._DrawingWand_TextInterwordSpacing = o.Yc)(e, t, r), i._DrawingWand_TextKerning = (e, t, r) => (i._DrawingWand_TextKerning = o.Zc)(e, t, r), i._DrawingWand_TextUnderColor = (e, t, r) => (i._DrawingWand_TextUnderColor = o._c)(e, t, r), i._DrawingWand_Translation = (e, t, r, n) => (i._DrawingWand_Translation = o.$c)(e, t, r, n), i._DrawingWand_Viewbox = (e, t, r, n, _, c) => (i._DrawingWand_Viewbox = o.ad)(e, t, r, n, _, c), i._MagickExceptionHelper_Description = (e) => (i._MagickExceptionHelper_Description = o.bd)(e), i._MagickExceptionHelper_Dispose = (e) => (i._MagickExceptionHelper_Dispose = o.cd)(e), i._MagickExceptionHelper_Related = (e, t) => (i._MagickExceptionHelper_Related = o.dd)(e, t), i._MagickExceptionHelper_RelatedCount = (e) => (i._MagickExceptionHelper_RelatedCount = o.ed)(e), i._MagickExceptionHelper_Message = (e) => (i._MagickExceptionHelper_Message = o.fd)(e), i._MagickExceptionHelper_Severity = (e) => (i._MagickExceptionHelper_Severity = o.gd)(e), i._PdfInfo_PageCount = (e, t, r) => (i._PdfInfo_PageCount = o.hd)(e, t, r), i._Environment_Initialize = () => (i._Environment_Initialize = o.id)(), i._Environment_GetEnv = (e) => (i._Environment_GetEnv = o.jd)(e), i._Environment_SetEnv = (e, t) => (i._Environment_SetEnv = o.kd)(e, t), i._MagickMemory_Relinquish = (e) => (i._MagickMemory_Relinquish = o.ld)(e), i._Magick_Delegates_Get = () => (i._Magick_Delegates_Get = o.md)(), i._Magick_Features_Get = () => (i._Magick_Features_Get = o.nd)(), i._Magick_ImageMagickVersion_Get = () => (i._Magick_ImageMagickVersion_Get = o.od)(), i._Magick_GetFonts = (e, t) => (i._Magick_GetFonts = o.pd)(e, t), i._Magick_GetFontFamily = (e, t) => (i._Magick_GetFontFamily = o.qd)(e, t), i._Magick_GetFontName = (e, t) => (i._Magick_GetFontName = o.rd)(e, t), i._Magick_DisposeFonts = (e) => (i._Magick_DisposeFonts = o.sd)(e), i._Magick_ResetRandomSeed = () => (i._Magick_ResetRandomSeed = o.td)(), i._Magick_SetDefaultFontFile = (e, t) => (i._Magick_SetDefaultFontFile = o.ud)(e, t), i._Magick_SetRandomSeed = (e) => (i._Magick_SetRandomSeed = o.vd)(e), i._Magick_SetLogDelegate = (e) => (i._Magick_SetLogDelegate = o.wd)(e), i._Magick_SetLogEvents = (e) => (i._Magick_SetLogEvents = o.xd)(e), i._MagickFormatInfo_CreateList = (e, t) => (i._MagickFormatInfo_CreateList = o.yd)(e, t), i._MagickFormatInfo_DisposeList = (e, t) => (i._MagickFormatInfo_DisposeList = o.zd)(e, t), i._MagickFormatInfo_CanReadMultithreaded_Get = (e) => (i._MagickFormatInfo_CanReadMultithreaded_Get = o.Ad)(e), i._MagickFormatInfo_CanWriteMultithreaded_Get = (e) => (i._MagickFormatInfo_CanWriteMultithreaded_Get = o.Bd)(e), i._MagickFormatInfo_Description_Get = (e) => (i._MagickFormatInfo_Description_Get = o.Cd)(e), i._MagickFormatInfo_Format_Get = (e) => (i._MagickFormatInfo_Format_Get = o.Dd)(e), i._MagickFormatInfo_MimeType_Get = (e) => (i._MagickFormatInfo_MimeType_Get = o.Ed)(e), i._MagickFormatInfo_Module_Get = (e) => (i._MagickFormatInfo_Module_Get = o.Fd)(e), i._MagickFormatInfo_SupportsMultipleFrames_Get = (e) => (i._MagickFormatInfo_SupportsMultipleFrames_Get = o.Gd)(e), i._MagickFormatInfo_SupportsReading_Get = (e) => (i._MagickFormatInfo_SupportsReading_Get = o.Hd)(e), i._MagickFormatInfo_SupportsWriting_Get = (e) => (i._MagickFormatInfo_SupportsWriting_Get = o.Id)(e), i._MagickFormatInfo_GetInfo = (e, t, r) => (i._MagickFormatInfo_GetInfo = o.Jd)(e, t, r), i._MagickFormatInfo_GetInfoByName = (e, t) => (i._MagickFormatInfo_GetInfoByName = o.Kd)(e, t), i._MagickFormatInfo_GetInfoWithBlob = (e, t, r) => (i._MagickFormatInfo_GetInfoWithBlob = o.Ld)(e, t, r), i._MagickFormatInfo_Unregister = (e) => (i._MagickFormatInfo_Unregister = o.Md)(e), i._MagickImage_Create = (e, t) => (i._MagickImage_Create = o.Nd)(e, t), i._MagickImage_Dispose = (e) => (i._MagickImage_Dispose = o.Od)(e), i._MagickImage_AnimationDelay_Get = (e) => (i._MagickImage_AnimationDelay_Get = o.Pd)(e), i._MagickImage_AnimationDelay_Set = (e, t) => (i._MagickImage_AnimationDelay_Set = o.Qd)(e, t), i._MagickImage_AnimationIterations_Get = (e) => (i._MagickImage_AnimationIterations_Get = o.Rd)(e), i._MagickImage_AnimationIterations_Set = (e, t) => (i._MagickImage_AnimationIterations_Set = o.Sd)(e, t), i._MagickImage_AnimationTicksPerSecond_Get = (e) => (i._MagickImage_AnimationTicksPerSecond_Get = o.Td)(e), i._MagickImage_AnimationTicksPerSecond_Set = (e, t) => (i._MagickImage_AnimationTicksPerSecond_Set = o.Ud)(e, t), i._MagickImage_BackgroundColor_Get = (e) => (i._MagickImage_BackgroundColor_Get = o.Vd)(e), i._MagickImage_BackgroundColor_Set = (e, t) => (i._MagickImage_BackgroundColor_Set = o.Wd)(e, t), i._MagickImage_BaseHeight_Get = (e) => (i._MagickImage_BaseHeight_Get = o.Xd)(e), i._MagickImage_BaseWidth_Get = (e) => (i._MagickImage_BaseWidth_Get = o.Yd)(e), i._MagickImage_BlackPointCompensation_Get = (e) => (i._MagickImage_BlackPointCompensation_Get = o.Zd)(e), i._MagickImage_BlackPointCompensation_Set = (e, t) => (i._MagickImage_BlackPointCompensation_Set = o._d)(e, t), i._MagickImage_BorderColor_Get = (e) => (i._MagickImage_BorderColor_Get = o.$d)(e), i._MagickImage_BorderColor_Set = (e, t) => (i._MagickImage_BorderColor_Set = o.ae)(e, t), i._MagickImage_BoundingBox_Get = (e, t) => (i._MagickImage_BoundingBox_Get = o.be)(e, t), i._MagickRectangle_Create = () => (i._MagickRectangle_Create = o.ce)(), i._MagickImage_ChannelCount_Get = (e) => (i._MagickImage_ChannelCount_Get = o.de)(e), i._MagickImage_ChromaBlue_Get = (e) => (i._MagickImage_ChromaBlue_Get = o.ee)(e), i._PrimaryInfo_Create = () => (i._PrimaryInfo_Create = o.fe)(), i._MagickImage_ChromaBlue_Set = (e, t) => (i._MagickImage_ChromaBlue_Set = o.ge)(e, t), i._MagickImage_ChromaGreen_Get = (e) => (i._MagickImage_ChromaGreen_Get = o.he)(e), i._MagickImage_ChromaGreen_Set = (e, t) => (i._MagickImage_ChromaGreen_Set = o.ie)(e, t), i._MagickImage_ChromaRed_Get = (e) => (i._MagickImage_ChromaRed_Get = o.je)(e), i._MagickImage_ChromaRed_Set = (e, t) => (i._MagickImage_ChromaRed_Set = o.ke)(e, t), i._MagickImage_ChromaWhite_Get = (e) => (i._MagickImage_ChromaWhite_Get = o.le)(e), i._MagickImage_ChromaWhite_Set = (e, t) => (i._MagickImage_ChromaWhite_Set = o.me)(e, t), i._MagickImage_ClassType_Get = (e) => (i._MagickImage_ClassType_Get = o.ne)(e), i._MagickImage_ClassType_Set = (e, t, r) => (i._MagickImage_ClassType_Set = o.oe)(e, t, r), i._QuantizeSettings_Create = () => (i._QuantizeSettings_Create = o.pe)(), i._QuantizeSettings_Dispose = (e) => (i._QuantizeSettings_Dispose = o.qe)(e), i._MagickImage_ColorFuzz_Get = (e) => (i._MagickImage_ColorFuzz_Get = o.re)(e), i._MagickImage_ColorFuzz_Set = (e, t) => (i._MagickImage_ColorFuzz_Set = o.se)(e, t), i._MagickImage_ColormapSize_Get = (e) => (i._MagickImage_ColormapSize_Get = o.te)(e), i._MagickImage_ColormapSize_Set = (e, t, r) => (i._MagickImage_ColormapSize_Set = o.ue)(e, t, r), i._MagickImage_ColorSpace_Get = (e) => (i._MagickImage_ColorSpace_Get = o.ve)(e), i._MagickImage_ColorSpace_Set = (e, t, r) => (i._MagickImage_ColorSpace_Set = o.we)(e, t, r), i._MagickImage_ColorType_Get = (e) => (i._MagickImage_ColorType_Get = o.xe)(e), i._MagickImage_ColorType_Set = (e, t, r) => (i._MagickImage_ColorType_Set = o.ye)(e, t, r), i._MagickImage_Compose_Get = (e) => (i._MagickImage_Compose_Get = o.ze)(e), i._MagickImage_Compose_Set = (e, t) => (i._MagickImage_Compose_Set = o.Ae)(e, t), i._MagickImage_Compression_Get = (e) => (i._MagickImage_Compression_Get = o.Be)(e), i._MagickImage_Compression_Set = (e, t) => (i._MagickImage_Compression_Set = o.Ce)(e, t), i._MagickImage_Depth_Get = (e) => (i._MagickImage_Depth_Get = o.De)(e), i._MagickImage_Depth_Set = (e, t) => (i._MagickImage_Depth_Set = o.Ee)(e, t), i._MagickImage_EncodingGeometry_Get = (e) => (i._MagickImage_EncodingGeometry_Get = o.Fe)(e), i._MagickImage_Endian_Get = (e) => (i._MagickImage_Endian_Get = o.Ge)(e), i._MagickImage_Endian_Set = (e, t) => (i._MagickImage_Endian_Set = o.He)(e, t), i._MagickImage_FileName_Get = (e) => (i._MagickImage_FileName_Get = o.Ie)(e), i._MagickImage_FileName_Set = (e, t) => (i._MagickImage_FileName_Set = o.Je)(e, t), i._MagickImage_FilterType_Get = (e) => (i._MagickImage_FilterType_Get = o.Ke)(e), i._MagickImage_FilterType_Set = (e, t) => (i._MagickImage_FilterType_Set = o.Le)(e, t), i._MagickImage_Format_Get = (e) => (i._MagickImage_Format_Get = o.Me)(e), i._MagickImage_Format_Set = (e, t) => (i._MagickImage_Format_Set = o.Ne)(e, t), i._MagickImage_Gamma_Get = (e) => (i._MagickImage_Gamma_Get = o.Oe)(e), i._MagickImage_GifDisposeMethod_Get = (e) => (i._MagickImage_GifDisposeMethod_Get = o.Pe)(e), i._MagickImage_GifDisposeMethod_Set = (e, t) => (i._MagickImage_GifDisposeMethod_Set = o.Qe)(e, t), i._MagickImage_HasAlpha_Get = (e) => (i._MagickImage_HasAlpha_Get = o.Re)(e), i._MagickImage_HasAlpha_Set = (e, t, r) => (i._MagickImage_HasAlpha_Set = o.Se)(e, t, r), i._MagickImage_Height_Get = (e) => (i._MagickImage_Height_Get = o.Te)(e), i._MagickImage_Interlace_Get = (e) => (i._MagickImage_Interlace_Get = o.Ue)(e), i._MagickImage_Interlace_Set = (e, t) => (i._MagickImage_Interlace_Set = o.Ve)(e, t), i._MagickImage_Interpolate_Get = (e) => (i._MagickImage_Interpolate_Get = o.We)(e), i._MagickImage_Interpolate_Set = (e, t) => (i._MagickImage_Interpolate_Set = o.Xe)(e, t), i._MagickImage_IsOpaque_Get = (e, t) => (i._MagickImage_IsOpaque_Get = o.Ye)(e, t), i._MagickImage_MatteColor_Get = (e) => (i._MagickImage_MatteColor_Get = o.Ze)(e), i._MagickImage_MatteColor_Set = (e, t) => (i._MagickImage_MatteColor_Set = o._e)(e, t), i._MagickImage_MeanErrorPerPixel_Get = (e) => (i._MagickImage_MeanErrorPerPixel_Get = o.$e)(e), i._MagickImage_MetaChannelCount_Get = (e) => (i._MagickImage_MetaChannelCount_Get = o.af)(e), i._MagickImage_MetaChannelCount_Set = (e, t, r) => (i._MagickImage_MetaChannelCount_Set = o.bf)(e, t, r), i._MagickImage_NormalizedMaximumError_Get = (e) => (i._MagickImage_NormalizedMaximumError_Get = o.cf)(e), i._MagickImage_NormalizedMeanError_Get = (e) => (i._MagickImage_NormalizedMeanError_Get = o.df)(e), i._MagickImage_Orientation_Get = (e) => (i._MagickImage_Orientation_Get = o.ef)(e), i._MagickImage_Orientation_Set = (e, t) => (i._MagickImage_Orientation_Set = o.ff)(e, t), i._MagickImage_Page_Get = (e) => (i._MagickImage_Page_Get = o.gf)(e), i._MagickImage_Page_Set = (e, t) => (i._MagickImage_Page_Set = o.hf)(e, t), i._MagickImage_Quality_Get = (e) => (i._MagickImage_Quality_Get = o.jf)(e), i._MagickImage_Quality_Set = (e, t) => (i._MagickImage_Quality_Set = o.kf)(e, t), i._MagickImage_RenderingIntent_Get = (e) => (i._MagickImage_RenderingIntent_Get = o.lf)(e), i._MagickImage_RenderingIntent_Set = (e, t) => (i._MagickImage_RenderingIntent_Set = o.mf)(e, t), i._MagickImage_ResolutionUnits_Get = (e) => (i._MagickImage_ResolutionUnits_Get = o.nf)(e), i._MagickImage_ResolutionUnits_Set = (e, t) => (i._MagickImage_ResolutionUnits_Set = o.of)(e, t), i._MagickImage_ResolutionX_Get = (e) => (i._MagickImage_ResolutionX_Get = o.pf)(e), i._MagickImage_ResolutionX_Set = (e, t) => (i._MagickImage_ResolutionX_Set = o.qf)(e, t), i._MagickImage_ResolutionY_Get = (e) => (i._MagickImage_ResolutionY_Get = o.rf)(e), i._MagickImage_ResolutionY_Set = (e, t) => (i._MagickImage_ResolutionY_Set = o.sf)(e, t), i._MagickImage_Signature_Get = (e, t) => (i._MagickImage_Signature_Get = o.tf)(e, t), i._MagickImage_TotalColors_Get = (e, t) => (i._MagickImage_TotalColors_Get = o.uf)(e, t), i._MagickImage_VirtualPixelMethod_Get = (e) => (i._MagickImage_VirtualPixelMethod_Get = o.vf)(e), i._MagickImage_VirtualPixelMethod_Set = (e, t, r) => (i._MagickImage_VirtualPixelMethod_Set = o.wf)(e, t, r), i._MagickImage_Width_Get = (e) => (i._MagickImage_Width_Get = o.xf)(e), i._MagickImage_AdaptiveBlur = (e, t, r, n) => (i._MagickImage_AdaptiveBlur = o.yf)(e, t, r, n), i._MagickImage_AdaptiveResize = (e, t, r) => (i._MagickImage_AdaptiveResize = o.zf)(e, t, r), i._MagickImage_AdaptiveSharpen = (e, t, r, n, _) => (i._MagickImage_AdaptiveSharpen = o.Af)(e, t, r, n, _), i._MagickImage_AdaptiveThreshold = (e, t, r, n, _, c) => (i._MagickImage_AdaptiveThreshold = o.Bf)(e, t, r, n, _, c), i._MagickImage_AddNoise = (e, t, r, n, _) => (i._MagickImage_AddNoise = o.Cf)(e, t, r, n, _), i._MagickImage_AffineTransform = (e, t, r, n, _, c, h, d) => (i._MagickImage_AffineTransform = o.Df)(e, t, r, n, _, c, h, d), i._MagickImage_Annotate = (e, t, r, n, _, c, h) => (i._MagickImage_Annotate = o.Ef)(e, t, r, n, _, c, h), i._MagickImage_AutoGamma = (e, t, r) => (i._MagickImage_AutoGamma = o.Ff)(e, t, r), i._MagickImage_AutoLevel = (e, t, r) => (i._MagickImage_AutoLevel = o.Gf)(e, t, r), i._MagickImage_AutoOrient = (e, t) => (i._MagickImage_AutoOrient = o.Hf)(e, t), i._MagickImage_AutoThreshold = (e, t, r) => (i._MagickImage_AutoThreshold = o.If)(e, t, r), i._MagickImage_BilateralBlur = (e, t, r, n, _, c) => (i._MagickImage_BilateralBlur = o.Jf)(e, t, r, n, _, c), i._MagickImage_BlackThreshold = (e, t, r, n) => (i._MagickImage_BlackThreshold = o.Kf)(e, t, r, n), i._MagickImage_BlueShift = (e, t, r) => (i._MagickImage_BlueShift = o.Lf)(e, t, r), i._MagickImage_Blur = (e, t, r, n, _) => (i._MagickImage_Blur = o.Mf)(e, t, r, n, _), i._MagickImage_Border = (e, t, r) => (i._MagickImage_Border = o.Nf)(e, t, r), i._MagickImage_BrightnessContrast = (e, t, r, n, _) => (i._MagickImage_BrightnessContrast = o.Of)(e, t, r, n, _), i._MagickImage_CannyEdge = (e, t, r, n, _, c) => (i._MagickImage_CannyEdge = o.Pf)(e, t, r, n, _, c), i._MagickImage_ChannelOffset = (e, t) => (i._MagickImage_ChannelOffset = o.Qf)(e, t), i._MagickImage_Charcoal = (e, t, r, n) => (i._MagickImage_Charcoal = o.Rf)(e, t, r, n), i._MagickImage_Chop = (e, t, r) => (i._MagickImage_Chop = o.Sf)(e, t, r), i._MagickImage_Clahe = (e, t, r, n, _, c) => (i._MagickImage_Clahe = o.Tf)(e, t, r, n, _, c), i._MagickImage_Clamp = (e, t, r) => (i._MagickImage_Clamp = o.Uf)(e, t, r), i._MagickImage_ClipPath = (e, t, r, n) => (i._MagickImage_ClipPath = o.Vf)(e, t, r, n), i._MagickImage_Clone = (e, t) => (i._MagickImage_Clone = o.Wf)(e, t), i._MagickImage_CloneArea = (e, t, r, n) => (i._MagickImage_CloneArea = o.Xf)(e, t, r, n), i._MagickImage_Clut = (e, t, r, n, _) => (i._MagickImage_Clut = o.Yf)(e, t, r, n, _), i._MagickImage_ColorDecisionList = (e, t, r) => (i._MagickImage_ColorDecisionList = o.Zf)(e, t, r), i._MagickImage_Colorize = (e, t, r, n) => (i._MagickImage_Colorize = o._f)(e, t, r, n), i._MagickImage_ColorMatrix = (e, t, r) => (i._MagickImage_ColorMatrix = o.$f)(e, t, r), i._MagickImage_ColorThreshold = (e, t, r, n) => (i._MagickImage_ColorThreshold = o.ag)(e, t, r, n), i._MagickImage_Compare = (e, t, r, n, _, c) => (i._MagickImage_Compare = o.bg)(e, t, r, n, _, c), i._MagickImage_CompareDistortion = (e, t, r, n, _) => (i._MagickImage_CompareDistortion = o.cg)(e, t, r, n, _), i._MagickImage_Composite = (e, t, r, n, _, c, h) => (i._MagickImage_Composite = o.dg)(e, t, r, n, _, c, h), i._MagickImage_CompositeGravity = (e, t, r, n, _, c, h, d) => (i._MagickImage_CompositeGravity = o.eg)(e, t, r, n, _, c, h, d), i._MagickImage_ConnectedComponents = (e, t, r, n) => (i._MagickImage_ConnectedComponents = o.fg)(e, t, r, n), i._MagickImage_Contrast = (e, t, r) => (i._MagickImage_Contrast = o.gg)(e, t, r), i._MagickImage_ContrastStretch = (e, t, r, n, _) => (i._MagickImage_ContrastStretch = o.hg)(e, t, r, n, _), i._MagickImage_ConvexHull = (e, t, r) => (i._MagickImage_ConvexHull = o.ig)(e, t, r), i._MagickImage_Convolve = (e, t, r) => (i._MagickImage_Convolve = o.jg)(e, t, r), i._MagickImage_CopyPixels = (e, t, r, n, _, c) => (i._MagickImage_CopyPixels = o.kg)(e, t, r, n, _, c), i._MagickImage_Crop = (e, t, r, n) => (i._MagickImage_Crop = o.lg)(e, t, r, n), i._MagickImage_CropToTiles = (e, t, r) => (i._MagickImage_CropToTiles = o.mg)(e, t, r), i._MagickImage_CycleColormap = (e, t, r) => (i._MagickImage_CycleColormap = o.ng)(e, t, r), i._MagickImage_Decipher = (e, t, r) => (i._MagickImage_Decipher = o.og)(e, t, r), i._MagickImage_Deskew = (e, t, r) => (i._MagickImage_Deskew = o.pg)(e, t, r), i._MagickImage_Despeckle = (e, t) => (i._MagickImage_Despeckle = o.qg)(e, t), i._MagickImage_DetermineBitDepth = (e, t, r) => (i._MagickImage_DetermineBitDepth = o.rg)(e, t, r), i._MagickImage_DetermineColorType = (e, t) => (i._MagickImage_DetermineColorType = o.sg)(e, t), i._MagickImage_Distort = (e, t, r, n, _, c) => (i._MagickImage_Distort = o.tg)(e, t, r, n, _, c), i._MagickImage_Edge = (e, t, r) => (i._MagickImage_Edge = o.ug)(e, t, r), i._MagickImage_Emboss = (e, t, r, n) => (i._MagickImage_Emboss = o.vg)(e, t, r, n), i._MagickImage_Encipher = (e, t, r) => (i._MagickImage_Encipher = o.wg)(e, t, r), i._MagickImage_Enhance = (e, t) => (i._MagickImage_Enhance = o.xg)(e, t), i._MagickImage_Equalize = (e, t, r) => (i._MagickImage_Equalize = o.yg)(e, t, r), i._MagickImage_Equals = (e, t, r) => (i._MagickImage_Equals = o.zg)(e, t, r), i._MagickImage_EvaluateFunction = (e, t, r, n, _, c) => (i._MagickImage_EvaluateFunction = o.Ag)(e, t, r, n, _, c), i._MagickImage_EvaluateGeometry = (e, t, r, n, _, c) => (i._MagickImage_EvaluateGeometry = o.Bg)(e, t, r, n, _, c), i._MagickImage_EvaluateOperator = (e, t, r, n, _) => (i._MagickImage_EvaluateOperator = o.Cg)(e, t, r, n, _), i._MagickImage_Extent = (e, t, r, n) => (i._MagickImage_Extent = o.Dg)(e, t, r, n), i._MagickImage_Flip = (e, t) => (i._MagickImage_Flip = o.Eg)(e, t), i._MagickImage_FloodFill = (e, t, r, n, _, c, h) => (i._MagickImage_FloodFill = o.Fg)(e, t, r, n, _, c, h), i._MagickImage_Flop = (e, t) => (i._MagickImage_Flop = o.Gg)(e, t), i._MagickImage_FontTypeMetrics = (e, t, r, n) => (i._MagickImage_FontTypeMetrics = o.Hg)(e, t, r, n), i._MagickImage_FormatExpression = (e, t, r, n) => (i._MagickImage_FormatExpression = o.Ig)(e, t, r, n), i._MagickImage_Frame = (e, t, r) => (i._MagickImage_Frame = o.Jg)(e, t, r), i._MagickImage_Fx = (e, t, r, n) => (i._MagickImage_Fx = o.Kg)(e, t, r, n), i._MagickImage_GammaCorrect = (e, t, r, n) => (i._MagickImage_GammaCorrect = o.Lg)(e, t, r, n), i._MagickImage_GaussianBlur = (e, t, r, n, _) => (i._MagickImage_GaussianBlur = o.Mg)(e, t, r, n, _), i._MagickImage_GetArtifact = (e, t) => (i._MagickImage_GetArtifact = o.Ng)(e, t), i._MagickImage_GetAttribute = (e, t, r) => (i._MagickImage_GetAttribute = o.Og)(e, t, r), i._MagickImage_GetColormapColor = (e, t) => (i._MagickImage_GetColormapColor = o.Pg)(e, t), i._MagickImage_GetNext = (e) => (i._MagickImage_GetNext = o.Qg)(e), i._MagickImage_GetNextArtifactName = (e) => (i._MagickImage_GetNextArtifactName = o.Rg)(e), i._MagickImage_GetNextAttributeName = (e) => (i._MagickImage_GetNextAttributeName = o.Sg)(e), i._MagickImage_GetNextProfileName = (e) => (i._MagickImage_GetNextProfileName = o.Tg)(e), i._MagickImage_GetProfile = (e, t) => (i._MagickImage_GetProfile = o.Ug)(e, t), i._MagickImage_GetReadMask = (e, t) => (i._MagickImage_GetReadMask = o.Vg)(e, t), i._MagickImage_GetWriteMask = (e, t) => (i._MagickImage_GetWriteMask = o.Wg)(e, t), i._MagickImage_Grayscale = (e, t, r) => (i._MagickImage_Grayscale = o.Xg)(e, t, r), i._MagickImage_HaldClut = (e, t, r, n) => (i._MagickImage_HaldClut = o.Yg)(e, t, r, n), i._MagickImage_HasChannel = (e, t) => (i._MagickImage_HasChannel = o.Zg)(e, t), i._MagickImage_HasProfile = (e, t) => (i._MagickImage_HasProfile = o._g)(e, t), i._MagickImage_Histogram = (e, t, r) => (i._MagickImage_Histogram = o.$g)(e, t, r), i._MagickImage_HoughLine = (e, t, r, n, _) => (i._MagickImage_HoughLine = o.ah)(e, t, r, n, _), i._MagickImage_Implode = (e, t, r, n) => (i._MagickImage_Implode = o.bh)(e, t, r, n), i._MagickImage_ImportPixels = (e, t, r, n, _, c, h, d, f, v) => (i._MagickImage_ImportPixels = o.ch)(e, t, r, n, _, c, h, d, f, v), i._MagickImage_Integral = (e, t) => (i._MagickImage_Integral = o.dh)(e, t), i._MagickImage_InterpolativeResize = (e, t, r, n) => (i._MagickImage_InterpolativeResize = o.eh)(e, t, r, n), i._MagickImage_InverseLevel = (e, t, r, n, _, c) => (i._MagickImage_InverseLevel = o.fh)(e, t, r, n, _, c), i._MagickImage_Kmeans = (e, t, r, n, _) => (i._MagickImage_Kmeans = o.gh)(e, t, r, n, _), i._MagickImage_Kuwahara = (e, t, r, n) => (i._MagickImage_Kuwahara = o.hh)(e, t, r, n), i._MagickImage_Level = (e, t, r, n, _, c) => (i._MagickImage_Level = o.ih)(e, t, r, n, _, c), i._MagickImage_LevelColors = (e, t, r, n, _, c) => (i._MagickImage_LevelColors = o.jh)(e, t, r, n, _, c), i._MagickImage_LinearStretch = (e, t, r, n) => (i._MagickImage_LinearStretch = o.kh)(e, t, r, n), i._MagickImage_LiquidRescale = (e, t, r, n, _) => (i._MagickImage_LiquidRescale = o.lh)(e, t, r, n, _), i._MagickImage_LocalContrast = (e, t, r, n, _) => (i._MagickImage_LocalContrast = o.mh)(e, t, r, n, _), i._MagickImage_Magnify = (e, t) => (i._MagickImage_Magnify = o.nh)(e, t), i._MagickImage_MeanShift = (e, t, r, n, _) => (i._MagickImage_MeanShift = o.oh)(e, t, r, n, _), i._MagickImage_Minify = (e, t) => (i._MagickImage_Minify = o.ph)(e, t), i._MagickImage_MinimumBoundingBox = (e, t, r) => (i._MagickImage_MinimumBoundingBox = o.qh)(e, t, r), i._MagickImage_Modulate = (e, t, r) => (i._MagickImage_Modulate = o.rh)(e, t, r), i._MagickImage_Moments = (e, t) => (i._MagickImage_Moments = o.sh)(e, t), i._MagickImage_Morphology = (e, t, r, n, _, c) => (i._MagickImage_Morphology = o.th)(e, t, r, n, _, c), i._MagickImage_MotionBlur = (e, t, r, n, _) => (i._MagickImage_MotionBlur = o.uh)(e, t, r, n, _), i._MagickImage_Negate = (e, t, r, n) => (i._MagickImage_Negate = o.vh)(e, t, r, n), i._MagickImage_Normalize = (e, t) => (i._MagickImage_Normalize = o.wh)(e, t), i._MagickImage_OilPaint = (e, t, r, n) => (i._MagickImage_OilPaint = o.xh)(e, t, r, n), i._MagickImage_Opaque = (e, t, r, n, _) => (i._MagickImage_Opaque = o.yh)(e, t, r, n, _), i._MagickImage_OrderedDither = (e, t, r, n) => (i._MagickImage_OrderedDither = o.zh)(e, t, r, n), i._MagickImage_Perceptible = (e, t, r, n) => (i._MagickImage_Perceptible = o.Ah)(e, t, r, n), i._MagickImage_PerceptualHash = (e, t) => (i._MagickImage_PerceptualHash = o.Bh)(e, t), i._MagickImage_Quantize = (e, t, r) => (i._MagickImage_Quantize = o.Ch)(e, t, r), i._MagickImage_Polaroid = (e, t, r, n, _, c) => (i._MagickImage_Polaroid = o.Dh)(e, t, r, n, _, c), i._MagickImage_Posterize = (e, t, r, n, _) => (i._MagickImage_Posterize = o.Eh)(e, t, r, n, _), i._MagickImage_RaiseOrLower = (e, t, r, n) => (i._MagickImage_RaiseOrLower = o.Fh)(e, t, r, n), i._MagickImage_RandomThreshold = (e, t, r, n, _) => (i._MagickImage_RandomThreshold = o.Gh)(e, t, r, n, _), i._MagickImage_RangeThreshold = (e, t, r, n, _, c) => (i._MagickImage_RangeThreshold = o.Hh)(e, t, r, n, _, c), i._MagickImage_ReadBlob = (e, t, r, n, _) => (i._MagickImage_ReadBlob = o.Ih)(e, t, r, n, _), i._MagickImage_ReadFile = (e, t) => (i._MagickImage_ReadFile = o.Jh)(e, t), i._MagickImage_ReadPixels = (e, t, r, n, _, c, h) => (i._MagickImage_ReadPixels = o.Kh)(e, t, r, n, _, c, h), i._MagickImage_ReadStream = (e, t, r, n, _, c) => (i._MagickImage_ReadStream = o.Lh)(e, t, r, n, _, c), i._MagickImage_RegionMask = (e, t, r) => (i._MagickImage_RegionMask = o.Mh)(e, t, r), i._MagickImage_Remap = (e, t, r, n) => (i._MagickImage_Remap = o.Nh)(e, t, r, n), i._MagickImage_RemoveArtifact = (e, t) => (i._MagickImage_RemoveArtifact = o.Oh)(e, t), i._MagickImage_RemoveAttribute = (e, t) => (i._MagickImage_RemoveAttribute = o.Ph)(e, t), i._MagickImage_RemoveProfile = (e, t) => (i._MagickImage_RemoveProfile = o.Qh)(e, t), i._MagickImage_ResetArtifactIterator = (e) => (i._MagickImage_ResetArtifactIterator = o.Rh)(e), i._MagickImage_ResetAttributeIterator = (e) => (i._MagickImage_ResetAttributeIterator = o.Sh)(e), i._MagickImage_ResetProfileIterator = (e) => (i._MagickImage_ResetProfileIterator = o.Th)(e), i._MagickImage_Resample = (e, t, r, n) => (i._MagickImage_Resample = o.Uh)(e, t, r, n), i._MagickImage_Resize = (e, t, r) => (i._MagickImage_Resize = o.Vh)(e, t, r), i._MagickImage_Roll = (e, t, r, n) => (i._MagickImage_Roll = o.Wh)(e, t, r, n), i._MagickImage_Rotate = (e, t, r) => (i._MagickImage_Rotate = o.Xh)(e, t, r), i._MagickImage_RotationalBlur = (e, t, r, n) => (i._MagickImage_RotationalBlur = o.Yh)(e, t, r, n), i._MagickImage_Sample = (e, t, r) => (i._MagickImage_Sample = o.Zh)(e, t, r), i._MagickImage_Scale = (e, t, r) => (i._MagickImage_Scale = o._h)(e, t, r), i._MagickImage_Segment = (e, t, r, n, _) => (i._MagickImage_Segment = o.$h)(e, t, r, n, _), i._MagickImage_SelectiveBlur = (e, t, r, n, _, c) => (i._MagickImage_SelectiveBlur = o.ai)(e, t, r, n, _, c), i._MagickImage_Separate = (e, t, r) => (i._MagickImage_Separate = o.bi)(e, t, r), i._MagickImage_SepiaTone = (e, t, r) => (i._MagickImage_SepiaTone = o.ci)(e, t, r), i._MagickImage_SetAlpha = (e, t, r) => (i._MagickImage_SetAlpha = o.di)(e, t, r), i._MagickImage_SetArtifact = (e, t, r) => (i._MagickImage_SetArtifact = o.ei)(e, t, r), i._MagickImage_SetAttribute = (e, t, r, n) => (i._MagickImage_SetAttribute = o.fi)(e, t, r, n), i._MagickImage_SetBitDepth = (e, t, r, n) => (i._MagickImage_SetBitDepth = o.gi)(e, t, r, n), i._MagickImage_SetClientData = (e, t) => (i._MagickImage_SetClientData = o.hi)(e, t), i._MagickImage_SetColormapColor = (e, t, r, n) => (i._MagickImage_SetColormapColor = o.ii)(e, t, r, n), i._MagickImage_SetColorMetric = (e, t, r) => (i._MagickImage_SetColorMetric = o.ji)(e, t, r), i._MagickImage_SetNext = (e, t) => (i._MagickImage_SetNext = o.ki)(e, t), i._MagickImage_SetProfile = (e, t, r, n, _) => (i._MagickImage_SetProfile = o.li)(e, t, r, n, _), i._MagickImage_SetProgressDelegate = (e, t) => (i._MagickImage_SetProgressDelegate = o.mi)(e, t), i._MagickImage_SetReadMask = (e, t, r) => (i._MagickImage_SetReadMask = o.ni)(e, t, r), i._MagickImage_SetWriteMask = (e, t, r) => (i._MagickImage_SetWriteMask = o.oi)(e, t, r), i._MagickImage_Shade = (e, t, r, n, _, c) => (i._MagickImage_Shade = o.pi)(e, t, r, n, _, c), i._MagickImage_Shadow = (e, t, r, n, _, c) => (i._MagickImage_Shadow = o.qi)(e, t, r, n, _, c), i._MagickImage_Sharpen = (e, t, r, n, _) => (i._MagickImage_Sharpen = o.ri)(e, t, r, n, _), i._MagickImage_Shave = (e, t, r, n) => (i._MagickImage_Shave = o.si)(e, t, r, n), i._MagickImage_Shear = (e, t, r, n) => (i._MagickImage_Shear = o.ti)(e, t, r, n), i._MagickImage_SigmoidalContrast = (e, t, r, n, _, c) => (i._MagickImage_SigmoidalContrast = o.ui)(e, t, r, n, _, c), i._MagickImage_SparseColor = (e, t, r, n, _, c) => (i._MagickImage_SparseColor = o.vi)(e, t, r, n, _, c), i._MagickImage_Spread = (e, t, r, n) => (i._MagickImage_Spread = o.wi)(e, t, r, n), i._MagickImage_Sketch = (e, t, r, n, _) => (i._MagickImage_Sketch = o.xi)(e, t, r, n, _), i._MagickImage_Solarize = (e, t, r) => (i._MagickImage_Solarize = o.yi)(e, t, r), i._MagickImage_SortPixels = (e, t) => (i._MagickImage_SortPixels = o.zi)(e, t), i._MagickImage_Splice = (e, t, r) => (i._MagickImage_Splice = o.Ai)(e, t, r), i._MagickImage_Statistic = (e, t, r, n, _) => (i._MagickImage_Statistic = o.Bi)(e, t, r, n, _), i._MagickImage_Statistics = (e, t, r) => (i._MagickImage_Statistics = o.Ci)(e, t, r), i._MagickImage_Stegano = (e, t, r) => (i._MagickImage_Stegano = o.Di)(e, t, r), i._MagickImage_Stereo = (e, t, r) => (i._MagickImage_Stereo = o.Ei)(e, t, r), i._MagickImage_Strip = (e, t) => (i._MagickImage_Strip = o.Fi)(e, t), i._MagickImage_SubImageSearch = (e, t, r, n, _, c, h) => (i._MagickImage_SubImageSearch = o.Gi)(e, t, r, n, _, c, h), i._MagickImage_Swirl = (e, t, r, n) => (i._MagickImage_Swirl = o.Hi)(e, t, r, n), i._MagickImage_Texture = (e, t, r) => (i._MagickImage_Texture = o.Ii)(e, t, r), i._MagickImage_Threshold = (e, t, r, n) => (i._MagickImage_Threshold = o.Ji)(e, t, r, n), i._MagickImage_Thumbnail = (e, t, r) => (i._MagickImage_Thumbnail = o.Ki)(e, t, r), i._MagickImage_Tint = (e, t, r, n) => (i._MagickImage_Tint = o.Li)(e, t, r, n), i._MagickImage_Transparent = (e, t, r, n) => (i._MagickImage_Transparent = o.Mi)(e, t, r, n), i._MagickImage_TransparentChroma = (e, t, r, n, _) => (i._MagickImage_TransparentChroma = o.Ni)(e, t, r, n, _), i._MagickImage_Transpose = (e, t) => (i._MagickImage_Transpose = o.Oi)(e, t), i._MagickImage_Transverse = (e, t) => (i._MagickImage_Transverse = o.Pi)(e, t), i._MagickImage_Trim = (e, t) => (i._MagickImage_Trim = o.Qi)(e, t), i._MagickImage_UniqueColors = (e, t) => (i._MagickImage_UniqueColors = o.Ri)(e, t), i._MagickImage_UnsharpMask = (e, t, r, n, _, c, h) => (i._MagickImage_UnsharpMask = o.Si)(e, t, r, n, _, c, h), i._MagickImage_Vignette = (e, t, r, n, _, c) => (i._MagickImage_Vignette = o.Ti)(e, t, r, n, _, c), i._MagickImage_Wave = (e, t, r, n, _) => (i._MagickImage_Wave = o.Ui)(e, t, r, n, _), i._MagickImage_WaveletDenoise = (e, t, r, n) => (i._MagickImage_WaveletDenoise = o.Vi)(e, t, r, n), i._MagickImage_WhiteBalance = (e, t) => (i._MagickImage_WhiteBalance = o.Wi)(e, t), i._MagickImage_WhiteThreshold = (e, t, r, n) => (i._MagickImage_WhiteThreshold = o.Xi)(e, t, r, n), i._MagickImage_WriteBlob = (e, t, r, n) => (i._MagickImage_WriteBlob = o.Yi)(e, t, r, n), i._MagickImage_WriteFile = (e, t, r) => (i._MagickImage_WriteFile = o.Zi)(e, t, r), i._MagickImage_WriteStream = (e, t, r, n, _, c, h, d) => (i._MagickImage_WriteStream = o._i)(e, t, r, n, _, c, h, d), i._MagickImageCollection_Append = (e, t, r) => (i._MagickImageCollection_Append = o.$i)(e, t, r), i._MagickImageCollection_Coalesce = (e, t) => (i._MagickImageCollection_Coalesce = o.aj)(e, t), i._MagickImageCollection_Combine = (e, t, r) => (i._MagickImageCollection_Combine = o.bj)(e, t, r), i._MagickImageCollection_Complex = (e, t, r) => (i._MagickImageCollection_Complex = o.cj)(e, t, r), i._MagickImageCollection_Deconstruct = (e, t) => (i._MagickImageCollection_Deconstruct = o.dj)(e, t), i._MagickImageCollection_Dispose = (e) => (i._MagickImageCollection_Dispose = o.ej)(e), i._MagickImageCollection_Evaluate = (e, t, r) => (i._MagickImageCollection_Evaluate = o.fj)(e, t, r), i._MagickImageCollection_Fx = (e, t, r, n) => (i._MagickImageCollection_Fx = o.gj)(e, t, r, n), i._MagickImageCollection_Merge = (e, t, r) => (i._MagickImageCollection_Merge = o.hj)(e, t, r), i._MagickImageCollection_Montage = (e, t, r) => (i._MagickImageCollection_Montage = o.ij)(e, t, r), i._MagickImageCollection_Morph = (e, t, r) => (i._MagickImageCollection_Morph = o.jj)(e, t, r), i._MagickImageCollection_Optimize = (e, t) => (i._MagickImageCollection_Optimize = o.kj)(e, t), i._MagickImageCollection_OptimizePlus = (e, t) => (i._MagickImageCollection_OptimizePlus = o.lj)(e, t), i._MagickImageCollection_OptimizeTransparency = (e, t) => (i._MagickImageCollection_OptimizeTransparency = o.mj)(e, t), i._MagickImageCollection_Polynomial = (e, t, r, n) => (i._MagickImageCollection_Polynomial = o.nj)(e, t, r, n), i._MagickImageCollection_Quantize = (e, t, r) => (i._MagickImageCollection_Quantize = o.oj)(e, t, r), i._MagickImageCollection_ReadBlob = (e, t, r, n, _) => (i._MagickImageCollection_ReadBlob = o.pj)(e, t, r, n, _), i._MagickImageCollection_ReadFile = (e, t) => (i._MagickImageCollection_ReadFile = o.qj)(e, t), i._MagickImageCollection_ReadStream = (e, t, r, n, _, c) => (i._MagickImageCollection_ReadStream = o.rj)(e, t, r, n, _, c), i._MagickImageCollection_Remap = (e, t, r, n) => (i._MagickImageCollection_Remap = o.sj)(e, t, r, n), i._MagickImageCollection_Smush = (e, t, r, n) => (i._MagickImageCollection_Smush = o.tj)(e, t, r, n), i._MagickImageCollection_WriteFile = (e, t, r) => (i._MagickImageCollection_WriteFile = o.uj)(e, t, r), i._MagickImageCollection_WriteStream = (e, t, r, n, _, c, h, d) => (i._MagickImageCollection_WriteStream = o.vj)(e, t, r, n, _, c, h, d), i._DoubleMatrix_Create = (e, t) => (i._DoubleMatrix_Create = o.wj)(e, t), i._DoubleMatrix_Dispose = (e) => (i._DoubleMatrix_Dispose = o.xj)(e), i._OpenCL_GetDevices = (e) => (i._OpenCL_GetDevices = o.yj)(e), i._OpenCL_GetDevice = (e, t) => (i._OpenCL_GetDevice = o.zj)(e, t), i._OpenCL_GetEnabled = () => (i._OpenCL_GetEnabled = o.Aj)(), i._OpenCL_SetEnabled = (e) => (i._OpenCL_SetEnabled = o.Bj)(e), i._OpenCLDevice_DeviceType_Get = (e) => (i._OpenCLDevice_DeviceType_Get = o.Cj)(e), i._OpenCLDevice_BenchmarkScore_Get = (e) => (i._OpenCLDevice_BenchmarkScore_Get = o.Dj)(e), i._OpenCLDevice_IsEnabled_Get = (e) => (i._OpenCLDevice_IsEnabled_Get = o.Ej)(e), i._OpenCLDevice_IsEnabled_Set = (e, t) => (i._OpenCLDevice_IsEnabled_Set = o.Fj)(e, t), i._OpenCLDevice_Name_Get = (e) => (i._OpenCLDevice_Name_Get = o.Gj)(e), i._OpenCLDevice_Version_Get = (e) => (i._OpenCLDevice_Version_Get = o.Hj)(e), i._OpenCLDevice_GetKernelProfileRecords = (e, t) => (i._OpenCLDevice_GetKernelProfileRecords = o.Ij)(e, t), i._OpenCLDevice_GetKernelProfileRecord = (e, t) => (i._OpenCLDevice_GetKernelProfileRecord = o.Jj)(e, t), i._OpenCLDevice_SetProfileKernels = (e, t) => (i._OpenCLDevice_SetProfileKernels = o.Kj)(e, t), i._OpenCLKernelProfileRecord_Count_Get = (e) => (i._OpenCLKernelProfileRecord_Count_Get = o.Lj)(e), i._OpenCLKernelProfileRecord_Name_Get = (e) => (i._OpenCLKernelProfileRecord_Name_Get = o.Mj)(e), i._OpenCLKernelProfileRecord_MaximumDuration_Get = (e) => (i._OpenCLKernelProfileRecord_MaximumDuration_Get = o.Nj)(e), i._OpenCLKernelProfileRecord_MinimumDuration_Get = (e) => (i._OpenCLKernelProfileRecord_MinimumDuration_Get = o.Oj)(e), i._OpenCLKernelProfileRecord_TotalDuration_Get = (e) => (i._OpenCLKernelProfileRecord_TotalDuration_Get = o.Pj)(e), i._JpegOptimizer_CompressFile = (e, t, r, n, _, c) => (i._JpegOptimizer_CompressFile = o.Qj)(e, t, r, n, _, c), i._JpegOptimizer_CompressStream = (e, t, r, n, _, c) => (i._JpegOptimizer_CompressStream = o.Rj)(e, t, r, n, _, c);
    var Zt = i._malloc = (e) => (Zt = i._malloc = o.Sj)(e), we = i._free = (e) => (we = i._free = o.Tj)(e);
    i._PixelCollection_Create = (e, t) => (i._PixelCollection_Create = o.Uj)(e, t), i._PixelCollection_Dispose = (e) => (i._PixelCollection_Dispose = o.Vj)(e), i._PixelCollection_GetArea = (e, t, r, n, _, c) => (i._PixelCollection_GetArea = o.Wj)(e, t, r, n, _, c), i._PixelCollection_GetReadOnlyArea = (e, t, r, n, _, c) => (i._PixelCollection_GetReadOnlyArea = o.Xj)(e, t, r, n, _, c), i._PixelCollection_SetArea = (e, t, r, n, _, c, h, d) => (i._PixelCollection_SetArea = o.Yj)(e, t, r, n, _, c, h, d), i._PixelCollection_ToByteArray = (e, t, r, n, _, c, h) => (i._PixelCollection_ToByteArray = o.Zj)(e, t, r, n, _, c, h), i._PixelCollection_ToShortArray = (e, t, r, n, _, c, h) => (i._PixelCollection_ToShortArray = o._j)(e, t, r, n, _, c, h), i._Quantum_Depth_Get = () => (i._Quantum_Depth_Get = o.$j)(), i._Quantum_Max_Get = () => (i._Quantum_Max_Get = o.ak)(), i._Quantum_ScaleToByte = (e) => (i._Quantum_ScaleToByte = o.bk)(e), i._ResourceLimits_Area_Get = () => (i._ResourceLimits_Area_Get = o.ck)(), i._ResourceLimits_Area_Set = (e) => (i._ResourceLimits_Area_Set = o.dk)(e), i._ResourceLimits_Disk_Get = () => (i._ResourceLimits_Disk_Get = o.ek)(), i._ResourceLimits_Disk_Set = (e) => (i._ResourceLimits_Disk_Set = o.fk)(e), i._ResourceLimits_Height_Get = () => (i._ResourceLimits_Height_Get = o.gk)(), i._ResourceLimits_Height_Set = (e) => (i._ResourceLimits_Height_Set = o.hk)(e), i._ResourceLimits_ListLength_Get = () => (i._ResourceLimits_ListLength_Get = o.ik)(), i._ResourceLimits_ListLength_Set = (e) => (i._ResourceLimits_ListLength_Set = o.jk)(e), i._ResourceLimits_MaxMemoryRequest_Get = () => (i._ResourceLimits_MaxMemoryRequest_Get = o.kk)(), i._ResourceLimits_MaxMemoryRequest_Set = (e, t) => (i._ResourceLimits_MaxMemoryRequest_Set = o.lk)(e, t), i._ResourceLimits_MaxProfileSize_Get = () => (i._ResourceLimits_MaxProfileSize_Get = o.mk)(), i._ResourceLimits_MaxProfileSize_Set = (e, t) => (i._ResourceLimits_MaxProfileSize_Set = o.nk)(e, t), i._ResourceLimits_Memory_Get = () => (i._ResourceLimits_Memory_Get = o.ok)(), i._ResourceLimits_Memory_Set = (e) => (i._ResourceLimits_Memory_Set = o.pk)(e), i._ResourceLimits_Thread_Get = () => (i._ResourceLimits_Thread_Get = o.qk)(), i._ResourceLimits_Thread_Set = (e) => (i._ResourceLimits_Thread_Set = o.rk)(e), i._ResourceLimits_Throttle_Get = () => (i._ResourceLimits_Throttle_Get = o.sk)(), i._ResourceLimits_Throttle_Set = (e) => (i._ResourceLimits_Throttle_Set = o.tk)(e), i._ResourceLimits_Time_Get = () => (i._ResourceLimits_Time_Get = o.uk)(), i._ResourceLimits_Time_Set = (e) => (i._ResourceLimits_Time_Set = o.vk)(e), i._ResourceLimits_Width_Get = () => (i._ResourceLimits_Width_Get = o.wk)(), i._ResourceLimits_Width_Set = (e) => (i._ResourceLimits_Width_Set = o.xk)(e), i._ResourceLimits_LimitMemory = (e) => (i._ResourceLimits_LimitMemory = o.yk)(e), i._DrawingSettings_Create = () => (i._DrawingSettings_Create = o.zk)(), i._DrawingSettings_Dispose = (e) => (i._DrawingSettings_Dispose = o.Ak)(e), i._DrawingSettings_BorderColor_Get = (e) => (i._DrawingSettings_BorderColor_Get = o.Bk)(e), i._DrawingSettings_BorderColor_Set = (e, t) => (i._DrawingSettings_BorderColor_Set = o.Ck)(e, t), i._DrawingSettings_FillColor_Get = (e) => (i._DrawingSettings_FillColor_Get = o.Dk)(e), i._DrawingSettings_FillColor_Set = (e, t) => (i._DrawingSettings_FillColor_Set = o.Ek)(e, t), i._DrawingSettings_FillRule_Get = (e) => (i._DrawingSettings_FillRule_Get = o.Fk)(e), i._DrawingSettings_FillRule_Set = (e, t) => (i._DrawingSettings_FillRule_Set = o.Gk)(e, t), i._DrawingSettings_Font_Get = (e) => (i._DrawingSettings_Font_Get = o.Hk)(e), i._DrawingSettings_Font_Set = (e, t) => (i._DrawingSettings_Font_Set = o.Ik)(e, t), i._DrawingSettings_FontFamily_Get = (e) => (i._DrawingSettings_FontFamily_Get = o.Jk)(e), i._DrawingSettings_FontFamily_Set = (e, t) => (i._DrawingSettings_FontFamily_Set = o.Kk)(e, t), i._DrawingSettings_FontPointsize_Get = (e) => (i._DrawingSettings_FontPointsize_Get = o.Lk)(e), i._DrawingSettings_FontPointsize_Set = (e, t) => (i._DrawingSettings_FontPointsize_Set = o.Mk)(e, t), i._DrawingSettings_FontStyle_Get = (e) => (i._DrawingSettings_FontStyle_Get = o.Nk)(e), i._DrawingSettings_FontStyle_Set = (e, t) => (i._DrawingSettings_FontStyle_Set = o.Ok)(e, t), i._DrawingSettings_FontWeight_Get = (e) => (i._DrawingSettings_FontWeight_Get = o.Pk)(e), i._DrawingSettings_FontWeight_Set = (e, t) => (i._DrawingSettings_FontWeight_Set = o.Qk)(e, t), i._DrawingSettings_StrokeAntiAlias_Get = (e) => (i._DrawingSettings_StrokeAntiAlias_Get = o.Rk)(e), i._DrawingSettings_StrokeAntiAlias_Set = (e, t) => (i._DrawingSettings_StrokeAntiAlias_Set = o.Sk)(e, t), i._DrawingSettings_StrokeColor_Get = (e) => (i._DrawingSettings_StrokeColor_Get = o.Tk)(e), i._DrawingSettings_StrokeColor_Set = (e, t) => (i._DrawingSettings_StrokeColor_Set = o.Uk)(e, t), i._DrawingSettings_StrokeDashOffset_Get = (e) => (i._DrawingSettings_StrokeDashOffset_Get = o.Vk)(e), i._DrawingSettings_StrokeDashOffset_Set = (e, t) => (i._DrawingSettings_StrokeDashOffset_Set = o.Wk)(e, t), i._DrawingSettings_StrokeLineCap_Get = (e) => (i._DrawingSettings_StrokeLineCap_Get = o.Xk)(e), i._DrawingSettings_StrokeLineCap_Set = (e, t) => (i._DrawingSettings_StrokeLineCap_Set = o.Yk)(e, t), i._DrawingSettings_StrokeLineJoin_Get = (e) => (i._DrawingSettings_StrokeLineJoin_Get = o.Zk)(e), i._DrawingSettings_StrokeLineJoin_Set = (e, t) => (i._DrawingSettings_StrokeLineJoin_Set = o._k)(e, t), i._DrawingSettings_StrokeMiterLimit_Get = (e) => (i._DrawingSettings_StrokeMiterLimit_Get = o.$k)(e), i._DrawingSettings_StrokeMiterLimit_Set = (e, t) => (i._DrawingSettings_StrokeMiterLimit_Set = o.al)(e, t), i._DrawingSettings_StrokeWidth_Get = (e) => (i._DrawingSettings_StrokeWidth_Get = o.bl)(e), i._DrawingSettings_StrokeWidth_Set = (e, t) => (i._DrawingSettings_StrokeWidth_Set = o.cl)(e, t), i._DrawingSettings_TextAntiAlias_Get = (e) => (i._DrawingSettings_TextAntiAlias_Get = o.dl)(e), i._DrawingSettings_TextAntiAlias_Set = (e, t) => (i._DrawingSettings_TextAntiAlias_Set = o.el)(e, t), i._DrawingSettings_TextDirection_Get = (e) => (i._DrawingSettings_TextDirection_Get = o.fl)(e), i._DrawingSettings_TextDirection_Set = (e, t) => (i._DrawingSettings_TextDirection_Set = o.gl)(e, t), i._DrawingSettings_TextEncoding_Get = (e) => (i._DrawingSettings_TextEncoding_Get = o.hl)(e), i._DrawingSettings_TextEncoding_Set = (e, t) => (i._DrawingSettings_TextEncoding_Set = o.il)(e, t), i._DrawingSettings_TextGravity_Get = (e) => (i._DrawingSettings_TextGravity_Get = o.jl)(e), i._DrawingSettings_TextGravity_Set = (e, t) => (i._DrawingSettings_TextGravity_Set = o.kl)(e, t), i._DrawingSettings_TextInterlineSpacing_Get = (e) => (i._DrawingSettings_TextInterlineSpacing_Get = o.ll)(e), i._DrawingSettings_TextInterlineSpacing_Set = (e, t) => (i._DrawingSettings_TextInterlineSpacing_Set = o.ml)(e, t), i._DrawingSettings_TextInterwordSpacing_Get = (e) => (i._DrawingSettings_TextInterwordSpacing_Get = o.nl)(e), i._DrawingSettings_TextInterwordSpacing_Set = (e, t) => (i._DrawingSettings_TextInterwordSpacing_Set = o.ol)(e, t), i._DrawingSettings_TextKerning_Get = (e) => (i._DrawingSettings_TextKerning_Get = o.pl)(e), i._DrawingSettings_TextKerning_Set = (e, t) => (i._DrawingSettings_TextKerning_Set = o.ql)(e, t), i._DrawingSettings_TextUnderColor_Get = (e) => (i._DrawingSettings_TextUnderColor_Get = o.rl)(e), i._DrawingSettings_TextUnderColor_Set = (e, t) => (i._DrawingSettings_TextUnderColor_Set = o.sl)(e, t), i._DrawingSettings_SetAffine = (e, t, r, n, _, c, h) => (i._DrawingSettings_SetAffine = o.tl)(e, t, r, n, _, c, h), i._DrawingSettings_SetFillPattern = (e, t, r) => (i._DrawingSettings_SetFillPattern = o.ul)(e, t, r), i._DrawingSettings_SetStrokeDashArray = (e, t, r) => (i._DrawingSettings_SetStrokeDashArray = o.vl)(e, t, r), i._DrawingSettings_SetStrokePattern = (e, t, r) => (i._DrawingSettings_SetStrokePattern = o.wl)(e, t, r), i._DrawingSettings_SetText = (e, t) => (i._DrawingSettings_SetText = o.xl)(e, t), i._MagickSettings_Create = () => (i._MagickSettings_Create = o.yl)(), i._MagickSettings_Dispose = (e) => (i._MagickSettings_Dispose = o.zl)(e), i._MagickSettings_AntiAlias_Get = (e) => (i._MagickSettings_AntiAlias_Get = o.Al)(e), i._MagickSettings_AntiAlias_Set = (e, t) => (i._MagickSettings_AntiAlias_Set = o.Bl)(e, t), i._MagickSettings_BackgroundColor_Get = (e) => (i._MagickSettings_BackgroundColor_Get = o.Cl)(e), i._MagickSettings_BackgroundColor_Set = (e, t) => (i._MagickSettings_BackgroundColor_Set = o.Dl)(e, t), i._MagickSettings_ColorSpace_Get = (e) => (i._MagickSettings_ColorSpace_Get = o.El)(e), i._MagickSettings_ColorSpace_Set = (e, t) => (i._MagickSettings_ColorSpace_Set = o.Fl)(e, t), i._MagickSettings_ColorType_Get = (e) => (i._MagickSettings_ColorType_Get = o.Gl)(e), i._MagickSettings_ColorType_Set = (e, t) => (i._MagickSettings_ColorType_Set = o.Hl)(e, t), i._MagickSettings_Compression_Get = (e) => (i._MagickSettings_Compression_Get = o.Il)(e), i._MagickSettings_Compression_Set = (e, t) => (i._MagickSettings_Compression_Set = o.Jl)(e, t), i._MagickSettings_Debug_Get = (e) => (i._MagickSettings_Debug_Get = o.Kl)(e), i._MagickSettings_Debug_Set = (e, t) => (i._MagickSettings_Debug_Set = o.Ll)(e, t), i._MagickSettings_Density_Get = (e) => (i._MagickSettings_Density_Get = o.Ml)(e), i._MagickSettings_Density_Set = (e, t) => (i._MagickSettings_Density_Set = o.Nl)(e, t), i._MagickSettings_Depth_Get = (e) => (i._MagickSettings_Depth_Get = o.Ol)(e), i._MagickSettings_Depth_Set = (e, t) => (i._MagickSettings_Depth_Set = o.Pl)(e, t), i._MagickSettings_Endian_Get = (e) => (i._MagickSettings_Endian_Get = o.Ql)(e), i._MagickSettings_Endian_Set = (e, t) => (i._MagickSettings_Endian_Set = o.Rl)(e, t), i._MagickSettings_Extract_Get = (e) => (i._MagickSettings_Extract_Get = o.Sl)(e), i._MagickSettings_Extract_Set = (e, t) => (i._MagickSettings_Extract_Set = o.Tl)(e, t), i._MagickSettings_Format_Get = (e) => (i._MagickSettings_Format_Get = o.Ul)(e), i._MagickSettings_Format_Set = (e, t) => (i._MagickSettings_Format_Set = o.Vl)(e, t), i._MagickSettings_FontPointsize_Get = (e) => (i._MagickSettings_FontPointsize_Get = o.Wl)(e), i._MagickSettings_FontPointsize_Set = (e, t) => (i._MagickSettings_FontPointsize_Set = o.Xl)(e, t), i._MagickSettings_Interlace_Get = (e) => (i._MagickSettings_Interlace_Get = o.Yl)(e), i._MagickSettings_Interlace_Set = (e, t) => (i._MagickSettings_Interlace_Set = o.Zl)(e, t), i._MagickSettings_Monochrome_Get = (e) => (i._MagickSettings_Monochrome_Get = o._l)(e), i._MagickSettings_Monochrome_Set = (e, t) => (i._MagickSettings_Monochrome_Set = o.$l)(e, t), i._MagickSettings_Verbose_Get = (e) => (i._MagickSettings_Verbose_Get = o.am)(e), i._MagickSettings_Verbose_Set = (e, t) => (i._MagickSettings_Verbose_Set = o.bm)(e, t), i._MagickSettings_SetColorFuzz = (e, t) => (i._MagickSettings_SetColorFuzz = o.cm)(e, t), i._MagickSettings_SetFileName = (e, t) => (i._MagickSettings_SetFileName = o.dm)(e, t), i._MagickSettings_SetFont = (e, t) => (i._MagickSettings_SetFont = o.em)(e, t), i._MagickSettings_SetNumberScenes = (e, t) => (i._MagickSettings_SetNumberScenes = o.fm)(e, t), i._MagickSettings_SetOption = (e, t, r) => (i._MagickSettings_SetOption = o.gm)(e, t, r), i._MagickSettings_SetPage = (e, t) => (i._MagickSettings_SetPage = o.hm)(e, t), i._MagickSettings_SetPing = (e, t) => (i._MagickSettings_SetPing = o.im)(e, t), i._MagickSettings_SetQuality = (e, t) => (i._MagickSettings_SetQuality = o.jm)(e, t), i._MagickSettings_SetScenes = (e, t) => (i._MagickSettings_SetScenes = o.km)(e, t), i._MagickSettings_SetScene = (e, t) => (i._MagickSettings_SetScene = o.lm)(e, t), i._MagickSettings_SetSize = (e, t) => (i._MagickSettings_SetSize = o.mm)(e, t), i._MontageSettings_Create = () => (i._MontageSettings_Create = o.nm)(), i._MontageSettings_Dispose = (e) => (i._MontageSettings_Dispose = o.om)(e), i._MontageSettings_SetBackgroundColor = (e, t) => (i._MontageSettings_SetBackgroundColor = o.pm)(e, t), i._MontageSettings_SetBorderColor = (e, t) => (i._MontageSettings_SetBorderColor = o.qm)(e, t), i._MontageSettings_SetBorderWidth = (e, t) => (i._MontageSettings_SetBorderWidth = o.rm)(e, t), i._MontageSettings_SetFillColor = (e, t) => (i._MontageSettings_SetFillColor = o.sm)(e, t), i._MontageSettings_SetFont = (e, t) => (i._MontageSettings_SetFont = o.tm)(e, t), i._MontageSettings_SetFontPointsize = (e, t) => (i._MontageSettings_SetFontPointsize = o.um)(e, t), i._MontageSettings_SetFrameGeometry = (e, t) => (i._MontageSettings_SetFrameGeometry = o.vm)(e, t), i._MontageSettings_SetGeometry = (e, t) => (i._MontageSettings_SetGeometry = o.wm)(e, t), i._MontageSettings_SetGravity = (e, t) => (i._MontageSettings_SetGravity = o.xm)(e, t), i._MontageSettings_SetShadow = (e, t) => (i._MontageSettings_SetShadow = o.ym)(e, t), i._MontageSettings_SetStrokeColor = (e, t) => (i._MontageSettings_SetStrokeColor = o.zm)(e, t), i._MontageSettings_SetTextureFileName = (e, t) => (i._MontageSettings_SetTextureFileName = o.Am)(e, t), i._MontageSettings_SetTileGeometry = (e, t) => (i._MontageSettings_SetTileGeometry = o.Bm)(e, t), i._MontageSettings_SetTitle = (e, t) => (i._MontageSettings_SetTitle = o.Cm)(e, t), i._QuantizeSettings_SetColors = (e, t) => (i._QuantizeSettings_SetColors = o.Dm)(e, t), i._QuantizeSettings_SetColorSpace = (e, t) => (i._QuantizeSettings_SetColorSpace = o.Em)(e, t), i._QuantizeSettings_SetDitherMethod = (e, t) => (i._QuantizeSettings_SetDitherMethod = o.Fm)(e, t), i._QuantizeSettings_SetMeasureErrors = (e, t) => (i._QuantizeSettings_SetMeasureErrors = o.Gm)(e, t), i._QuantizeSettings_SetTreeDepth = (e, t) => (i._QuantizeSettings_SetTreeDepth = o.Hm)(e, t), i._ChannelMoments_Centroid_Get = (e) => (i._ChannelMoments_Centroid_Get = o.Im)(e), i._ChannelMoments_EllipseAngle_Get = (e) => (i._ChannelMoments_EllipseAngle_Get = o.Jm)(e), i._ChannelMoments_EllipseAxis_Get = (e) => (i._ChannelMoments_EllipseAxis_Get = o.Km)(e), i._ChannelMoments_EllipseEccentricity_Get = (e) => (i._ChannelMoments_EllipseEccentricity_Get = o.Lm)(e), i._ChannelMoments_EllipseIntensity_Get = (e) => (i._ChannelMoments_EllipseIntensity_Get = o.Mm)(e), i._ChannelMoments_GetHuInvariants = (e, t) => (i._ChannelMoments_GetHuInvariants = o.Nm)(e, t), i._ChannelPerceptualHash_GetHuPhash = (e, t, r) => (i._ChannelPerceptualHash_GetHuPhash = o.Om)(e, t, r), i._ChannelStatistics_Depth_Get = (e) => (i._ChannelStatistics_Depth_Get = o.Pm)(e), i._ChannelStatistics_Entropy_Get = (e) => (i._ChannelStatistics_Entropy_Get = o.Qm)(e), i._ChannelStatistics_Kurtosis_Get = (e) => (i._ChannelStatistics_Kurtosis_Get = o.Rm)(e), i._ChannelStatistics_Maximum_Get = (e) => (i._ChannelStatistics_Maximum_Get = o.Sm)(e), i._ChannelStatistics_Mean_Get = (e) => (i._ChannelStatistics_Mean_Get = o.Tm)(e), i._ChannelStatistics_Minimum_Get = (e) => (i._ChannelStatistics_Minimum_Get = o.Um)(e), i._ChannelStatistics_Skewness_Get = (e) => (i._ChannelStatistics_Skewness_Get = o.Vm)(e), i._ChannelStatistics_StandardDeviation_Get = (e) => (i._ChannelStatistics_StandardDeviation_Get = o.Wm)(e), i._Moments_DisposeList = (e) => (i._Moments_DisposeList = o.Xm)(e), i._Moments_GetInstance = (e, t) => (i._Moments_GetInstance = o.Ym)(e, t), i._PerceptualHash_DisposeList = (e) => (i._PerceptualHash_DisposeList = o.Zm)(e), i._PerceptualHash_GetInstance = (e, t, r) => (i._PerceptualHash_GetInstance = o._m)(e, t, r), i._Statistics_DisposeList = (e) => (i._Statistics_DisposeList = o.$m)(e), i._Statistics_GetInstance = (e, t) => (i._Statistics_GetInstance = o.an)(e, t), i._ConnectedComponent_DisposeList = (e) => (i._ConnectedComponent_DisposeList = o.bn)(e), i._ConnectedComponent_GetArea = (e) => (i._ConnectedComponent_GetArea = o.cn)(e), i._ConnectedComponent_GetCentroid = (e) => (i._ConnectedComponent_GetCentroid = o.dn)(e), i._ConnectedComponent_GetColor = (e) => (i._ConnectedComponent_GetColor = o.en)(e), i._ConnectedComponent_GetHeight = (e) => (i._ConnectedComponent_GetHeight = o.fn)(e), i._ConnectedComponent_GetId = (e) => (i._ConnectedComponent_GetId = o.gn)(e), i._ConnectedComponent_GetWidth = (e) => (i._ConnectedComponent_GetWidth = o.hn)(e), i._ConnectedComponent_GetX = (e) => (i._ConnectedComponent_GetX = o.jn)(e), i._ConnectedComponent_GetY = (e) => (i._ConnectedComponent_GetY = o.kn)(e), i._ConnectedComponent_GetInstance = (e, t) => (i._ConnectedComponent_GetInstance = o.ln)(e, t), i._MagickGeometry_Create = () => (i._MagickGeometry_Create = o.mn)(), i._MagickGeometry_Dispose = (e) => (i._MagickGeometry_Dispose = o.nn)(e), i._MagickGeometry_X_Get = (e) => (i._MagickGeometry_X_Get = o.on)(e), i._MagickGeometry_Y_Get = (e) => (i._MagickGeometry_Y_Get = o.pn)(e), i._MagickGeometry_Width_Get = (e) => (i._MagickGeometry_Width_Get = o.qn)(e), i._MagickGeometry_Height_Get = (e) => (i._MagickGeometry_Height_Get = o.rn)(e), i._MagickGeometry_Initialize = (e, t) => (i._MagickGeometry_Initialize = o.sn)(e, t), i._MagickRectangle_Dispose = (e) => (i._MagickRectangle_Dispose = o.tn)(e), i._MagickRectangle_X_Get = (e) => (i._MagickRectangle_X_Get = o.un)(e), i._MagickRectangle_X_Set = (e, t) => (i._MagickRectangle_X_Set = o.vn)(e, t), i._MagickRectangle_Y_Get = (e) => (i._MagickRectangle_Y_Get = o.wn)(e), i._MagickRectangle_Y_Set = (e, t) => (i._MagickRectangle_Y_Set = o.xn)(e, t), i._MagickRectangle_Width_Get = (e) => (i._MagickRectangle_Width_Get = o.yn)(e), i._MagickRectangle_Width_Set = (e, t) => (i._MagickRectangle_Width_Set = o.zn)(e, t), i._MagickRectangle_Height_Get = (e) => (i._MagickRectangle_Height_Get = o.An)(e), i._MagickRectangle_Height_Set = (e, t) => (i._MagickRectangle_Height_Set = o.Bn)(e, t), i._MagickRectangle_FromPageSize = (e) => (i._MagickRectangle_FromPageSize = o.Cn)(e), i._OffsetInfo_Create = () => (i._OffsetInfo_Create = o.Dn)(), i._OffsetInfo_Dispose = (e) => (i._OffsetInfo_Dispose = o.En)(e), i._OffsetInfo_SetX = (e, t) => (i._OffsetInfo_SetX = o.Fn)(e, t), i._OffsetInfo_SetY = (e, t) => (i._OffsetInfo_SetY = o.Gn)(e, t), i._PointInfo_X_Get = (e) => (i._PointInfo_X_Get = o.Hn)(e), i._PointInfo_Y_Get = (e) => (i._PointInfo_Y_Get = o.In)(e), i._PointInfoCollection_Create = (e) => (i._PointInfoCollection_Create = o.Jn)(e), i._PointInfoCollection_Dispose = (e) => (i._PointInfoCollection_Dispose = o.Kn)(e), i._PointInfoCollection_GetX = (e, t) => (i._PointInfoCollection_GetX = o.Ln)(e, t), i._PointInfoCollection_GetY = (e, t) => (i._PointInfoCollection_GetY = o.Mn)(e, t), i._PointInfoCollection_Set = (e, t, r, n) => (i._PointInfoCollection_Set = o.Nn)(e, t, r, n), i._PrimaryInfo_Dispose = (e) => (i._PrimaryInfo_Dispose = o.On)(e), i._PrimaryInfo_X_Get = (e) => (i._PrimaryInfo_X_Get = o.Pn)(e), i._PrimaryInfo_X_Set = (e, t) => (i._PrimaryInfo_X_Set = o.Qn)(e, t), i._PrimaryInfo_Y_Get = (e) => (i._PrimaryInfo_Y_Get = o.Rn)(e), i._PrimaryInfo_Y_Set = (e, t) => (i._PrimaryInfo_Y_Set = o.Sn)(e, t), i._PrimaryInfo_Z_Get = (e) => (i._PrimaryInfo_Z_Get = o.Tn)(e), i._PrimaryInfo_Z_Set = (e, t) => (i._PrimaryInfo_Z_Set = o.Un)(e, t), i._StringInfo_Length_Get = (e) => (i._StringInfo_Length_Get = o.Vn)(e), i._StringInfo_Datum_Get = (e) => (i._StringInfo_Datum_Get = o.Wn)(e), i._TypeMetric_Dispose = (e) => (i._TypeMetric_Dispose = o.Xn)(e), i._TypeMetric_Ascent_Get = (e) => (i._TypeMetric_Ascent_Get = o.Yn)(e), i._TypeMetric_Descent_Get = (e) => (i._TypeMetric_Descent_Get = o.Zn)(e), i._TypeMetric_MaxHorizontalAdvance_Get = (e) => (i._TypeMetric_MaxHorizontalAdvance_Get = o._n)(e), i._TypeMetric_TextHeight_Get = (e) => (i._TypeMetric_TextHeight_Get = o.$n)(e), i._TypeMetric_TextWidth_Get = (e) => (i._TypeMetric_TextWidth_Get = o.ao)(e), i._TypeMetric_UnderlinePosition_Get = (e) => (i._TypeMetric_UnderlinePosition_Get = o.bo)(e), i._TypeMetric_UnderlineThickness_Get = (e) => (i._TypeMetric_UnderlineThickness_Get = o.co)(e);
    var Zi = (e, t) => (Zi = o.eo)(e, t), z = (e, t) => (z = o.fo)(e, t), er = (e) => (er = o.go)(e), tr = (e) => (tr = o.ho)(e), ir = () => (ir = o.io)(), rr = (e, t, r) => (rr = o.jo)(e, t, r);
    function ks(e, t, r, n) {
      var _ = H();
      try {
        W(e)(t, r, n);
      } catch (c) {
        if (N(_), c !== c + 0) throw c;
        z(1, 0);
      }
    }
    function Ss(e, t, r, n) {
      var _ = H();
      try {
        return W(e)(t, r, n);
      } catch (c) {
        if (N(_), c !== c + 0) throw c;
        z(1, 0);
      }
    }
    function vs(e, t, r) {
      var n = H();
      try {
        return W(e)(t, r);
      } catch (_) {
        if (N(n), _ !== _ + 0) throw _;
        z(1, 0);
      }
    }
    function ws(e, t) {
      var r = H();
      try {
        return W(e)(t);
      } catch (n) {
        if (N(r), n !== n + 0) throw n;
        z(1, 0);
      }
    }
    function Is(e, t) {
      var r = H();
      try {
        W(e)(t);
      } catch (n) {
        if (N(r), n !== n + 0) throw n;
        z(1, 0);
      }
    }
    function ys(e, t, r) {
      var n = H();
      try {
        W(e)(t, r);
      } catch (_) {
        if (N(n), _ !== _ + 0) throw _;
        z(1, 0);
      }
    }
    function Cs(e, t, r, n, _) {
      var c = H();
      try {
        W(e)(t, r, n, _);
      } catch (h) {
        if (N(c), h !== h + 0) throw h;
        z(1, 0);
      }
    }
    function Ds(e, t, r, n, _) {
      var c = H();
      try {
        return W(e)(t, r, n, _);
      } catch (h) {
        if (N(c), h !== h + 0) throw h;
        z(1, 0);
      }
    }
    function Ps(e, t, r, n) {
      var _ = H();
      try {
        return W(e)(t, r, n);
      } catch (c) {
        if (N(_), c !== c + 0) throw c;
        return z(1, 0), 0n;
      }
    }
    function Es(e, t) {
      var r = H();
      try {
        return W(e)(t);
      } catch (n) {
        if (N(r), n !== n + 0) throw n;
        return z(1, 0), 0n;
      }
    }
    function Ts(e, t, r, n, _, c, h, d, f) {
      var v = H();
      try {
        return W(e)(t, r, n, _, c, h, d, f);
      } catch (w) {
        if (N(v), w !== w + 0) throw w;
        z(1, 0);
      }
    }
    function Gs(e, t, r, n, _, c, h) {
      var d = H();
      try {
        return W(e)(t, r, n, _, c, h);
      } catch (f) {
        if (N(d), f !== f + 0) throw f;
        z(1, 0);
      }
    }
    function bs(e, t, r, n, _) {
      var c = H();
      try {
        return W(e)(t, r, n, _);
      } catch (h) {
        if (N(c), h !== h + 0) throw h;
        z(1, 0);
      }
    }
    function As(e) {
      var t = H();
      try {
        return W(e)();
      } catch (r) {
        if (N(t), r !== r + 0) throw r;
        z(1, 0);
      }
    }
    function Rs(e, t, r) {
      var n = H();
      try {
        return W(e)(t, r);
      } catch (_) {
        if (N(n), _ !== _ + 0) throw _;
        z(1, 0);
      }
    }
    function xs(e, t, r) {
      var n = H();
      try {
        W(e)(t, r);
      } catch (_) {
        if (N(n), _ !== _ + 0) throw _;
        z(1, 0);
      }
    }
    function Fs(e, t, r, n, _, c) {
      var h = H();
      try {
        return W(e)(t, r, n, _, c);
      } catch (d) {
        if (N(h), d !== d + 0) throw d;
        z(1, 0);
      }
    }
    function Ls(e, t, r) {
      var n = H();
      try {
        return W(e)(t, r);
      } catch (_) {
        if (N(n), _ !== _ + 0) throw _;
        z(1, 0);
      }
    }
    function Ws(e) {
      var t = H();
      try {
        W(e)();
      } catch (r) {
        if (N(t), r !== r + 0) throw r;
        z(1, 0);
      }
    }
    function Bs(e, t, r, n, _, c) {
      var h = H();
      try {
        W(e)(t, r, n, _, c);
      } catch (d) {
        if (N(h), d !== d + 0) throw d;
        z(1, 0);
      }
    }
    function zs(e, t, r, n, _, c, h, d) {
      var f = H();
      try {
        return W(e)(t, r, n, _, c, h, d);
      } catch (v) {
        if (N(f), v !== v + 0) throw v;
        z(1, 0);
      }
    }
    function Ns(e, t, r, n, _, c, h, d, f, v) {
      var w = H();
      try {
        return W(e)(t, r, n, _, c, h, d, f, v);
      } catch (y) {
        if (N(w), y !== y + 0) throw y;
        z(1, 0);
      }
    }
    function Hs(e, t, r, n) {
      var _ = H();
      try {
        W(e)(t, r, n);
      } catch (c) {
        if (N(_), c !== c + 0) throw c;
        z(1, 0);
      }
    }
    function $s(e, t, r, n, _, c, h, d, f, v, w) {
      var y = H();
      try {
        W(e)(t, r, n, _, c, h, d, f, v, w);
      } catch (C) {
        if (N(y), C !== C + 0) throw C;
        z(1, 0);
      }
    }
    function Us(e, t, r, n, _, c, h, d, f, v, w) {
      var y = H();
      try {
        return W(e)(t, r, n, _, c, h, d, f, v, w);
      } catch (C) {
        if (N(y), C !== C + 0) throw C;
        z(1, 0);
      }
    }
    function js(e, t, r, n, _, c, h, d, f, v) {
      var w = H();
      try {
        W(e)(t, r, n, _, c, h, d, f, v);
      } catch (y) {
        if (N(w), y !== y + 0) throw y;
        z(1, 0);
      }
    }
    function Ys(e, t, r, n, _, c, h) {
      var d = H();
      try {
        W(e)(t, r, n, _, c, h);
      } catch (f) {
        if (N(d), f !== f + 0) throw f;
        z(1, 0);
      }
    }
    function Vs(e, t, r, n, _, c, h, d) {
      var f = H();
      try {
        W(e)(t, r, n, _, c, h, d);
      } catch (v) {
        if (N(f), v !== v + 0) throw v;
        z(1, 0);
      }
    }
    function Xs(e, t, r, n, _, c, h, d, f, v, w, y) {
      var C = H();
      try {
        return W(e)(t, r, n, _, c, h, d, f, v, w, y);
      } catch (D) {
        if (N(C), D !== D + 0) throw D;
        z(1, 0);
      }
    }
    function qs(e, t, r, n, _, c) {
      var h = H();
      try {
        return W(e)(t, r, n, _, c);
      } catch (d) {
        if (N(h), d !== d + 0) throw d;
        z(1, 0);
      }
    }
    function Qs(e, t, r, n, _, c, h, d, f) {
      var v = H();
      try {
        W(e)(t, r, n, _, c, h, d, f);
      } catch (w) {
        if (N(v), w !== w + 0) throw w;
        z(1, 0);
      }
    }
    function Ks(e, t, r, n, _, c, h, d, f, v, w, y) {
      var C = H();
      try {
        W(e)(t, r, n, _, c, h, d, f, v, w, y);
      } catch (D) {
        if (N(C), D !== D + 0) throw D;
        z(1, 0);
      }
    }
    function Os(e) {
      e = Object.assign({}, e);
      var t = (_) => (c) => _(c) >>> 0, r = (_) => (c, h) => _(c, h) >>> 0, n = (_) => () => _() >>> 0;
      return e.cb = t(e.cb), e.Sj = t(e.Sj), e.eo = r(e.eo), e._emscripten_stack_alloc = t(e._emscripten_stack_alloc), e.io = n(e.io), e;
    }
    i.addFunction = fs, i.setValue = Br, i.getValue = Wr, i.UTF8ToString = Ht, i.stringToUTF8 = ke, i.lengthBytesUTF8 = Qe, i.FS = u;
    var Dt;
    nt = function e() {
      Dt || ar(), Dt || (nt = e);
    };
    function ar() {
      if (Fe > 0 || (wr(), Fe > 0))
        return;
      function e() {
        Dt || (Dt = !0, i.calledRun = !0, !Rt && (Ir(), g(i), i.onRuntimeInitialized?.(), yr()));
      }
      i.setStatus ? (i.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => i.setStatus(""), 1), e();
      }, 1)) : e();
    }
    if (i.preInit)
      for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); i.preInit.length > 0; )
        i.preInit.pop()();
    return ar(), s = p, s;
  };
})();
class So {
  constructor(a) {
    if (a instanceof URL) {
      if (a.protocol !== "http:" && a.protocol !== "https:")
        throw new U("Only http/https protocol is supported");
      this.locateFile = () => a.href;
    } else a instanceof WebAssembly.Module ? this.instantiateWasm = (s, i) => {
      const g = new WebAssembly.Instance(a, s);
      i(g);
    } : this.wasmBinary = a;
  }
  wasmBinary;
  instantiateWasm;
  locateFile;
}
class l {
  loader;
  api;
  /** @internal */
  constructor() {
    this.loader = (a, s) => new Promise((i, g) => {
      if (this.api !== void 0) {
        i();
        return;
      }
      const m = new So(a);
      ko(m).then((p) => {
        try {
          this.writeConfigurationFiles(p, s), ri(p, "MAGICK_CONFIGURE_PATH", (M) => {
            ri(p, "/xml", (I) => {
              p._Environment_SetEnv(M, I), this.api = p, i();
            });
          });
        } catch (M) {
          g(M);
        }
      });
    });
  }
  /** @internal */
  async _initialize(a, s) {
    await this.loader(a, s);
  }
  /** @internal */
  static get _api() {
    if (!Et.api)
      throw new U("`await initializeImageMagick` should be called to initialize the library");
    return Et.api;
  }
  /** @internal */
  static set _api(a) {
    Et.api = a;
  }
  static read(a, s, i, g) {
    return ae._create((m) => {
      let p = g;
      if (typeof a != "string" && !dr(a))
        typeof s == "number" && typeof i == "number" && m.read(a, s, i);
      else if (typeof s != "number" && typeof i != "number") {
        p = i;
        let M;
        s instanceof Ee ? M = s : typeof s == "string" ? (M = new Ee(), M.format = s) : p = s, m.read(a, M);
      }
      return p(m);
    });
  }
  static readCollection(a, s, i) {
    return Pe.create()._use((m) => {
      let p = i, M;
      return s instanceof Ee ? M = s : typeof s == "string" ? (M = new Ee(), M.format = s) : p = s, m.read(a, M), p(m);
    });
  }
  static readFromCanvas(a, s, i) {
    return ae._create((g) => (g.readFromCanvas(a, i), s(g)));
  }
  writeConfigurationFiles(a, s) {
    a.FS.analyzePath("/xml").exists || a.FS.mkdir("/xml");
    for (const g of s.all()) {
      const m = a.FS.open(`/xml/${g.fileName}`, "w"), p = new TextEncoder().encode(g.data);
      a.FS.write(m, p, 0, p.length), a.FS.close(m);
    }
  }
}
const Et = new l();
async function Xo(S, a) {
  await Et._initialize(S, a ?? ni.default);
}
class vo {
  /** @internal */
  constructor(a, s, i) {
    this.origin = a, this.progress = new Z((s + 1) / (i * 100));
  }
  /**
   * Gets the originator of this event.
   */
  origin;
  /**
   * Gets the progress percentage.
   */
  progress;
  /**
   * Gets or sets a value indicating whether the current operation will be canceled.
   */
  cancel = !1;
}
class se {
  static _logDelegate = 0;
  static _onLog;
  static _progressDelegate = 0;
  static _images = {};
  static setLogDelegate(a) {
    se._logDelegate === 0 && a !== void 0 && (se._logDelegate = l._api.addFunction(se.logDelegate, "vii")), l._api._Magick_SetLogDelegate(a === void 0 ? 0 : se._logDelegate), se._onLog = a;
  }
  static setProgressDelegate(a) {
    se._progressDelegate === 0 && (this._progressDelegate = l._api.addFunction(se.progressDelegate, "iijji")), this._images[a._instance] = a, l._api._MagickImage_SetClientData(a._instance, a._instance), l._api._MagickImage_SetProgressDelegate(a._instance, se._progressDelegate);
  }
  static removeProgressDelegate(a) {
    l._api._MagickImage_SetClientData(a._instance, 0), l._api._MagickImage_SetProgressDelegate(a._instance, 0), delete se._images[a._instance];
  }
  static logDelegate(a, s) {
    if (se._onLog === void 0)
      return;
    const i = he(s, "");
    se._onLog(new io(a, i));
  }
  static progressDelegate(a, s, i, g) {
    const m = se._images[g];
    if (m === void 0 || m.onProgress === void 0)
      return 1;
    const p = Number(s), M = Number(i), I = he(a), R = new vo(I, p, M);
    return m.onProgress(R), R.cancel ? 0 : 1;
  }
}
class Ae {
  static _allFormats;
  constructor(a, s, i, g, m) {
    this.format = a, this.description = s, this.supportsMultipleFrames = i, this.supportsReading = g, this.supportsWriting = m;
  }
  description;
  format;
  supportsMultipleFrames;
  supportsReading;
  supportsWriting;
  static get all() {
    return Ae._allFormats === void 0 && (Ae._allFormats = Ae.loadFormats()), Ae._allFormats;
  }
  static loadFormats() {
    return T.usePointer((a) => Ge.use((s) => {
      const i = l._api._MagickFormatInfo_CreateList(s.ptr, a), g = s.value;
      try {
        const m = new Array(g), p = Object.values(Re);
        for (let M = 0; M < g; M++) {
          const I = l._api._MagickFormatInfo_GetInfo(i, M, a), R = he(l._api._MagickFormatInfo_Format_Get(I)), B = Ae.convertFormat(R, p), J = he(l._api._MagickFormatInfo_Description_Get(I), ""), ee = l._api._MagickFormatInfo_SupportsMultipleFrames_Get(I) == 1, rt = l._api._MagickFormatInfo_SupportsReading_Get(I) == 1, xe = l._api._MagickFormatInfo_SupportsWriting_Get(I) == 1;
          m[M] = new Ae(B, J, ee, rt, xe);
        }
        return m;
      } finally {
        l._api._MagickFormatInfo_DisposeList(i, g);
      }
    }));
  }
  static convertFormat(a, s) {
    return a === null ? Re.Unknown : s.includes(a) ? a : Re.Unknown;
  }
}
const Q = {
  /**
   * None.
   */
  None: 0,
  /**
   * Accelerate.
   */
  Accelerate: 1,
  /**
   * Annotate.
   */
  Annotate: 2,
  /**
   * Blob.
   */
  Blob: 4,
  /**
   * Cache.
   */
  Cache: 8,
  /**
   * Coder.
   */
  Coder: 16,
  /**
   * Configure.
   */
  Configure: 32,
  /**
   * Deprecate.
   */
  Deprecate: 64,
  /**
   * Draw.
   */
  Draw: 128,
  /**
   * Exception.
   */
  Exception: 256,
  /**
   * Image.
   */
  Image: 512,
  /**
   * Locale.
   */
  Locale: 1024,
  /**
   * Module.
   */
  Module: 2048,
  /**
   * Pixel.
   */
  Pixel: 4096,
  /**
   * Policy.
   */
  Policy: 8192,
  /**
   * Resource.
   */
  Resource: 16384,
  /**
   * Trace.
   */
  Trace: 32768,
  /**
   * Transform.
   */
  Transform: 65536,
  /**
   * User.
   */
  User: 131072,
  /**
   * Wand.
   */
  Wand: 262144,
  /**
   * Detailed.
   */
  Detailed: 2147450879,
  /**
   * All.
   */
  get All() {
    return this.Detailed | this.Trace;
  }
};
class Te {
  /**
   * Gets the ImageMagick delegate libraries.
   */
  static get delegates() {
    return he(l._api._Magick_Delegates_Get(), "Unknown");
  }
  /**
   * Gets the ImageMagick features.
   */
  static get features() {
    return he(l._api._Magick_Features_Get(), " ").slice(0, -1);
  }
  /**
   * Gets the ImageMagick version.
   */
  static get imageMagickVersion() {
    return he(l._api._Magick_ImageMagickVersion_Get(), "Unknown");
  }
  /**
   * Gets information about the supported formats.
   */
  static get supportedFormats() {
    return Ae.all;
  }
  /**
   * Function that will be executed when something is logged by ImageMagick.
   */
  static onLog;
  /**
   * Registers a font.
   * @param name The name of the font.
   * @param data The byte array containing the font.
   */
  static addFont(a, s) {
    const i = l._api.FS;
    i.analyzePath("/fonts").exists || i.mkdir("/fonts");
    const m = i.open(`/fonts/${a}`, "w");
    i.write(m, s, 0, s.length), i.close(m);
  }
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static resetRandomSeed = () => l._api._Magick_ResetRandomSeed();
  /**
   * Sets the pseudo-random number generator secret key.
   * @param seed The secret key.
   */
  static setRandomSeed = (a) => l._api._Magick_SetRandomSeed(a);
  /**
   * Set the events that will be written to the log. The log will be written to the Log event
   * and the debug window in VisualStudio. To change the log settings you must use a custom
   * log.xml file.
   * @param eventTypes The events that should be logged.
   */
  static setLogEvents(a) {
    const s = a == Q.None ? void 0 : Te.logDelegate;
    se.setLogDelegate(s);
    const i = Te.getEventTypeString(a);
    b(i, (g) => l._api._Magick_SetLogEvents(g));
  }
  /** @internal */
  static _getFontFileName(a) {
    const s = `/fonts/${a}`;
    if (!l._api.FS.analyzePath(s).exists)
      throw `Unable to find a font with the name '${a}', register it with the addFont method of the Magick class.`;
    return s;
  }
  static getEventTypeString(a) {
    if (a == Q.All)
      return "All,Trace";
    if (a == Q.Detailed)
      return "All";
    switch (a) {
      case Q.Accelerate:
        return "Accelerate";
      case Q.Annotate:
        return "Annotate";
      case Q.Blob:
        return "Blob";
      case Q.Cache:
        return "Cache";
      case Q.Coder:
        return "Coder";
      case Q.Configure:
        return "Configure";
      case Q.Deprecate:
        return "Deprecate";
      case Q.Draw:
        return "Draw";
      case Q.Exception:
        return "Exception";
      case Q.Image:
        return "Image";
      case Q.Locale:
        return "Locale";
      case Q.Module:
        return "Module";
      case Q.Pixel:
        return "Pixel";
      case Q.Policy:
        return "Policy";
      case Q.Resource:
        return "Resource";
      case Q.Trace:
        return "Trace";
      case Q.Transform:
        return "Transform";
      case Q.User:
        return "User";
      case Q.Wand:
        return "Wand";
      case Q.None:
      default:
        return "None";
    }
  }
  static logDelegate(a) {
    Te.onLog !== void 0 && Te.onLog(a);
  }
}
class wo {
  _font;
  /**
   * Initializes a new instance of the {@link DrawableFont} class.
   * @param opacity The name of the font that was registered.
   */
  constructor(a) {
    this._font = a;
  }
  draw(a) {
    const s = Te._getFontFileName(this._font);
    a.font(s);
  }
}
class Io {
  _gravity;
  /**
   * Initializes a new instance of the {@link DrawableGravity} class.
   * @param gravity The gravity to use.
   */
  constructor(a) {
    this._gravity = a;
  }
  draw(a) {
    a.gravity(this._gravity);
  }
}
class yo {
  _startX;
  _startY;
  _endX;
  _endY;
  /**
   * Initializes a new instance of the {@link DrawableLine} class.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  constructor(a, s, i, g) {
    this._startX = a, this._startY = s, this._endX = i, this._endY = g;
  }
  draw(a) {
    a.line(this._startX, this._startY, this._endX, this._endY);
  }
}
class Co {
  _x;
  _y;
  /**
   * Initializes a new instance of the {@link DrawablePoint} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  constructor(a, s) {
    this._x = a, this._y = s;
  }
  draw(a) {
    a.point(this._x, this._y);
  }
}
class Do {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  /**
    * Initializes a new instance of the {@link DrawablePoint} class.
    * @param upperLeftX The upper left X coordinate.
    * @param upperLeftY The upper left Y coordinate.
    * @param lowerRightX The lower right X coordinate.
    * @param lowerRightY The lower right Y coordinate.
    */
  constructor(a, s, i, g) {
    this._upperLeftX = a, this._upperLeftY = s, this._lowerRightX = i, this._lowerRightY = g;
  }
  draw(a) {
    a.rectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY);
  }
}
class Po {
  _upperLeftX;
  _upperLeftY;
  _lowerRightX;
  _lowerRightY;
  _cornerWidth;
  _cornerHeight;
  /**
   * Initializes a new instance of the {@link DrawableRoundRectangle} class.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  constructor(a, s, i, g, m, p) {
    this._upperLeftX = a, this._upperLeftY = s, this._lowerRightX = i, this._lowerRightY = g, this._cornerWidth = m, this._cornerHeight = p;
  }
  draw(a) {
    a.roundRectangle(this._upperLeftX, this._upperLeftY, this._lowerRightX, this._lowerRightY, this._cornerWidth, this._cornerHeight);
  }
}
class Eo {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableStrokeColor} class.
   * @param color The color to use.
   */
  constructor(a) {
    this._color = a;
  }
  draw(a) {
    a.strokeColor(this._color);
  }
}
class To {
  _width;
  /**
   * Initializes a new instance of the {@link DrawableStrokeWidth} class.
   * @param width The width.
   */
  constructor(a) {
    this._width = a;
  }
  draw(a) {
    a.strokeWidth(this._width);
  }
}
class Go {
  _alignment;
  /**
   * Initializes a new instance of the {@link DrawableFillColor} class.
   * @param alignment The text alignment
   */
  constructor(a) {
    this._alignment = a;
  }
  draw(a) {
    a.textAlignment(this._alignment);
  }
}
class ut {
  _isEnabled;
  constructor(a) {
    this._isEnabled = a;
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias disabled.
   */
  static get disabled() {
    return new ut(!1);
  }
  /**
   * Initializes a new instance of the {@link DrawableTextAntialias} class with antialias enabled.
   */
  static get enabled() {
    return new ut(!0);
  }
  draw(a) {
    a.textAntialias(this._isEnabled);
  }
}
class bo {
  _decoration;
  /**
   * Initializes a new instance of the {@link DrawableTextDecoration} class.
   * @param decoration The text decoration.
   */
  constructor(a) {
    this._decoration = a;
  }
  draw(a) {
    a.textDecoration(this._decoration);
  }
}
class Ao {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterlineSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(a) {
    this._spacing = a;
  }
  draw(a) {
    a.textInterlineSpacing(this._spacing);
  }
}
class Ro {
  _spacing;
  /**
   * Initializes a new instance of the {@link DrawableTextInterwordSpacing} class.
   * @param decoration The spacing to use.
   */
  constructor(a) {
    this._spacing = a;
  }
  draw(a) {
    a.textInterwordspacing(this._spacing);
  }
}
class xo {
  _kerning;
  /**
   * Initializes a new instance of the {@link DrawableTextKerning} class.
   * @param kerning The kerning to use.
   */
  constructor(a) {
    this._kerning = a;
  }
  draw(a) {
    a.textKerning(this._kerning);
  }
}
class Fo {
  _color;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param decoration The color to use.
   */
  constructor(a) {
    this._color = a;
  }
  draw(a) {
    a.textUnderColor(this._color);
  }
}
class Lo {
  _x;
  _y;
  _value;
  /**
   * Initializes a new instance of the {@link DrawableTextUnderColor} class.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  constructor(a, s, i) {
    this._x = a, this._y = s, this._value = i;
  }
  draw(a) {
    a.text(this._x, this._y, this._value);
  }
}
class Wo {
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get None() {
    return new k(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00000000.
  */
  static get Transparent() {
    return new k(0, 0, 0, 0);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0F8FFFF.
  */
  static get AliceBlue() {
    return new k(240, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAEBD7FF.
  */
  static get AntiqueWhite() {
    return new k(250, 235, 215, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Aqua() {
    return new k(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFFD4FF.
  */
  static get Aquamarine() {
    return new k(127, 255, 212, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFFFFF.
  */
  static get Azure() {
    return new k(240, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5DCFF.
  */
  static get Beige() {
    return new k(245, 245, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4C4FF.
  */
  static get Bisque() {
    return new k(255, 228, 196, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000000FF.
  */
  static get Black() {
    return new k(0, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEBCDFF.
  */
  static get BlanchedAlmond() {
    return new k(255, 235, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000FFFF.
  */
  static get Blue() {
    return new k(0, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8A2BE2FF.
  */
  static get BlueViolet() {
    return new k(138, 43, 226, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A52A2AFF.
  */
  static get Brown() {
    return new k(165, 42, 42, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DEB887FF.
  */
  static get BurlyWood() {
    return new k(222, 184, 135, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #5F9EA0FF.
  */
  static get CadetBlue() {
    return new k(95, 158, 160, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7FFF00FF.
  */
  static get Chartreuse() {
    return new k(127, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2691EFF.
  */
  static get Chocolate() {
    return new k(210, 105, 30, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF7F50FF.
  */
  static get Coral() {
    return new k(255, 127, 80, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6495EDFF.
  */
  static get CornflowerBlue() {
    return new k(100, 149, 237, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF8DCFF.
  */
  static get Cornsilk() {
    return new k(255, 248, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DC143CFF.
  */
  static get Crimson() {
    return new k(220, 20, 60, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FFFFFF.
  */
  static get Cyan() {
    return new k(0, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00008BFF.
  */
  static get DarkBlue() {
    return new k(0, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008B8BFF.
  */
  static get DarkCyan() {
    return new k(0, 139, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B8860BFF.
  */
  static get DarkGoldenrod() {
    return new k(184, 134, 11, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A9A9A9FF.
  */
  static get DarkGray() {
    return new k(169, 169, 169, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #006400FF.
  */
  static get DarkGreen() {
    return new k(0, 100, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BDB76BFF.
  */
  static get DarkKhaki() {
    return new k(189, 183, 107, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B008BFF.
  */
  static get DarkMagenta() {
    return new k(139, 0, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #556B2FFF.
  */
  static get DarkOliveGreen() {
    return new k(85, 107, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF8C00FF.
  */
  static get DarkOrange() {
    return new k(255, 140, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9932CCFF.
  */
  static get DarkOrchid() {
    return new k(153, 50, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B0000FF.
  */
  static get DarkRed() {
    return new k(139, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E9967AFF.
  */
  static get DarkSalmon() {
    return new k(233, 150, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8FBC8FFF.
  */
  static get DarkSeaGreen() {
    return new k(143, 188, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #483D8BFF.
  */
  static get DarkSlateBlue() {
    return new k(72, 61, 139, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2F4F4FFF.
  */
  static get DarkSlateGray() {
    return new k(47, 79, 79, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00CED1FF.
  */
  static get DarkTurquoise() {
    return new k(0, 206, 209, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9400D3FF.
  */
  static get DarkViolet() {
    return new k(148, 0, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF1493FF.
  */
  static get DeepPink() {
    return new k(255, 20, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00BFFFFF.
  */
  static get DeepSkyBlue() {
    return new k(0, 191, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #696969FF.
  */
  static get DimGray() {
    return new k(105, 105, 105, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #1E90FFFF.
  */
  static get DodgerBlue() {
    return new k(30, 144, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B22222FF.
  */
  static get Firebrick() {
    return new k(178, 34, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAF0FF.
  */
  static get FloralWhite() {
    return new k(255, 250, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #228B22FF.
  */
  static get ForestGreen() {
    return new k(34, 139, 34, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Fuchsia() {
    return new k(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DCDCDCFF.
  */
  static get Gainsboro() {
    return new k(220, 220, 220, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F8F8FFFF.
  */
  static get GhostWhite() {
    return new k(248, 248, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFD700FF.
  */
  static get Gold() {
    return new k(255, 215, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DAA520FF.
  */
  static get Goldenrod() {
    return new k(218, 165, 32, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808080FF.
  */
  static get Gray() {
    return new k(128, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008000FF.
  */
  static get Green() {
    return new k(0, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADFF2FFF.
  */
  static get GreenYellow() {
    return new k(173, 255, 47, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0FFF0FF.
  */
  static get Honeydew() {
    return new k(240, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF69B4FF.
  */
  static get HotPink() {
    return new k(255, 105, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD5C5CFF.
  */
  static get IndianRed() {
    return new k(205, 92, 92, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4B0082FF.
  */
  static get Indigo() {
    return new k(75, 0, 130, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFF0FF.
  */
  static get Ivory() {
    return new k(255, 255, 240, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F0E68CFF.
  */
  static get Khaki() {
    return new k(240, 230, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E6E6FAFF.
  */
  static get Lavender() {
    return new k(230, 230, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF0F5FF.
  */
  static get LavenderBlush() {
    return new k(255, 240, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7CFC00FF.
  */
  static get LawnGreen() {
    return new k(124, 252, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFACDFF.
  */
  static get LemonChiffon() {
    return new k(255, 250, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #ADD8E6FF.
  */
  static get LightBlue() {
    return new k(173, 216, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F08080FF.
  */
  static get LightCoral() {
    return new k(240, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #E0FFFFFF.
  */
  static get LightCyan() {
    return new k(224, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAFAD2FF.
  */
  static get LightGoldenrodYellow() {
    return new k(250, 250, 210, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #90EE90FF.
  */
  static get LightGreen() {
    return new k(144, 238, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D3D3D3FF.
  */
  static get LightGray() {
    return new k(211, 211, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFB6C1FF.
  */
  static get LightPink() {
    return new k(255, 182, 193, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA07AFF.
  */
  static get LightSalmon() {
    return new k(255, 160, 122, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #20B2AAFF.
  */
  static get LightSeaGreen() {
    return new k(32, 178, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEFAFF.
  */
  static get LightSkyBlue() {
    return new k(135, 206, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #778899FF.
  */
  static get LightSlateGray() {
    return new k(119, 136, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0C4DEFF.
  */
  static get LightSteelBlue() {
    return new k(176, 196, 222, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFE0FF.
  */
  static get LightYellow() {
    return new k(255, 255, 224, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF00FF.
  */
  static get Lime() {
    return new k(0, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #32CD32FF.
  */
  static get LimeGreen() {
    return new k(50, 205, 50, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FAF0E6FF.
  */
  static get Linen() {
    return new k(250, 240, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF00FFFF.
  */
  static get Magenta() {
    return new k(255, 0, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800000FF.
  */
  static get Maroon() {
    return new k(128, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #66CDAAFF.
  */
  static get MediumAquamarine() {
    return new k(102, 205, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #0000CDFF.
  */
  static get MediumBlue() {
    return new k(0, 0, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BA55D3FF.
  */
  static get MediumOrchid() {
    return new k(186, 85, 211, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9370DBFF.
  */
  static get MediumPurple() {
    return new k(147, 112, 219, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #3CB371FF.
  */
  static get MediumSeaGreen() {
    return new k(60, 179, 113, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #7B68EEFF.
  */
  static get MediumSlateBlue() {
    return new k(123, 104, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FA9AFF.
  */
  static get MediumSpringGreen() {
    return new k(0, 250, 154, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #48D1CCFF.
  */
  static get MediumTurquoise() {
    return new k(72, 209, 204, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C71585FF.
  */
  static get MediumVioletRed() {
    return new k(199, 21, 133, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #191970FF.
  */
  static get MidnightBlue() {
    return new k(25, 25, 112, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5FFFAFF.
  */
  static get MintCream() {
    return new k(245, 255, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4E1FF.
  */
  static get MistyRose() {
    return new k(255, 228, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFE4B5FF.
  */
  static get Moccasin() {
    return new k(255, 228, 181, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDEADFF.
  */
  static get NavajoWhite() {
    return new k(255, 222, 173, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #000080FF.
  */
  static get Navy() {
    return new k(0, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FDF5E6FF.
  */
  static get OldLace() {
    return new k(253, 245, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #808000FF.
  */
  static get Olive() {
    return new k(128, 128, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6B8E23FF.
  */
  static get OliveDrab() {
    return new k(107, 142, 35, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFA500FF.
  */
  static get Orange() {
    return new k(255, 165, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF4500FF.
  */
  static get OrangeRed() {
    return new k(255, 69, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DA70D6FF.
  */
  static get Orchid() {
    return new k(218, 112, 214, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EEE8AAFF.
  */
  static get PaleGoldenrod() {
    return new k(238, 232, 170, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #98FB98FF.
  */
  static get PaleGreen() {
    return new k(152, 251, 152, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #AFEEEEFF.
  */
  static get PaleTurquoise() {
    return new k(175, 238, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DB7093FF.
  */
  static get PaleVioletRed() {
    return new k(219, 112, 147, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFEFD5FF.
  */
  static get PapayaWhip() {
    return new k(255, 239, 213, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFDAB9FF.
  */
  static get PeachPuff() {
    return new k(255, 218, 185, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #CD853FFF.
  */
  static get Peru() {
    return new k(205, 133, 63, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFC0CBFF.
  */
  static get Pink() {
    return new k(255, 192, 203, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #DDA0DDFF.
  */
  static get Plum() {
    return new k(221, 160, 221, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #B0E0E6FF.
  */
  static get PowderBlue() {
    return new k(176, 224, 230, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #800080FF.
  */
  static get Purple() {
    return new k(128, 0, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #663399FF.
  */
  static get RebeccaPurple() {
    return new k(102, 51, 153, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF0000FF.
  */
  static get Red() {
    return new k(255, 0, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #BC8F8FFF.
  */
  static get RosyBrown() {
    return new k(188, 143, 143, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4169E1FF.
  */
  static get RoyalBlue() {
    return new k(65, 105, 225, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #8B4513FF.
  */
  static get SaddleBrown() {
    return new k(139, 69, 19, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FA8072FF.
  */
  static get Salmon() {
    return new k(250, 128, 114, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F4A460FF.
  */
  static get SandyBrown() {
    return new k(244, 164, 96, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #2E8B57FF.
  */
  static get SeaGreen() {
    return new k(46, 139, 87, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFF5EEFF.
  */
  static get SeaShell() {
    return new k(255, 245, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #A0522DFF.
  */
  static get Sienna() {
    return new k(160, 82, 45, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #C0C0C0FF.
  */
  static get Silver() {
    return new k(192, 192, 192, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #87CEEBFF.
  */
  static get SkyBlue() {
    return new k(135, 206, 235, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #6A5ACDFF.
  */
  static get SlateBlue() {
    return new k(106, 90, 205, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #708090FF.
  */
  static get SlateGray() {
    return new k(112, 128, 144, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFAFAFF.
  */
  static get Snow() {
    return new k(255, 250, 250, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #00FF7FFF.
  */
  static get SpringGreen() {
    return new k(0, 255, 127, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #4682B4FF.
  */
  static get SteelBlue() {
    return new k(70, 130, 180, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D2B48CFF.
  */
  static get Tan() {
    return new k(210, 180, 140, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #008080FF.
  */
  static get Teal() {
    return new k(0, 128, 128, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #D8BFD8FF.
  */
  static get Thistle() {
    return new k(216, 191, 216, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FF6347FF.
  */
  static get Tomato() {
    return new k(255, 99, 71, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #40E0D0FF.
  */
  static get Turquoise() {
    return new k(64, 224, 208, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #EE82EEFF.
  */
  static get Violet() {
    return new k(238, 130, 238, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5DEB3FF.
  */
  static get Wheat() {
    return new k(245, 222, 179, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFFFFFF.
  */
  static get White() {
    return new k(255, 255, 255, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #F5F5F5FF.
  */
  static get WhiteSmoke() {
    return new k(245, 245, 245, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #FFFF00FF.
  */
  static get Yellow() {
    return new k(255, 255, 0, 255);
  }
  /**
   * Gets a system-defined color that has an RGBA value of #9ACD32FF.
  */
  static get YellowGreen() {
    return new k(154, 205, 50, 255);
  }
}
class qo {
  _drawables = [];
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  disableStrokeAntialias() {
    return this._drawables.push(ut.disabled), this;
  }
  /**
   * Adds {@link DrawableTextAntialias.enabled} to the drawables.
   */
  enableStrokeAntialias() {
    return this._drawables.push(ut.enabled), this;
  }
  /**
   * Adds a {@link DrawableFillColor} to the drawables.
   * @param color The color to use.
   */
  fillColor(a) {
    return this._drawables.push(new Zs(a)), this;
  }
  /**
   * Adds a {@link DrawableFillOpacity} to the drawables.
   * @param opacity The opacity.
   */
  fillOpacity(a) {
    return this._drawables.push(new eo(a)), this;
  }
  /**
   * Adds a {@link DrawableFont} to the drawables.
   * @param font The name of the font that was registered.
   */
  font(a) {
    return this._drawables.push(new wo(a)), this;
  }
  /**
   * Adds a {@link DrawableFontPointSize} to the drawables.
   * @param pointSize The point size.
   */
  fontPointSize(a) {
    return this._drawables.push(new to(a)), this;
  }
  /**
   * Obtain font metrics for text string given current font, pointsize, and density settings.
   * @param text The text to get the metrics for.
   * @param ignoreNewlines A value indicating whether newlines should be ignored.
   */
  fontTypeMetrics(a, s = !1) {
    return ae._create((i) => (i.read(Wo.Transparent, 1, 1), Gt._use(i, (g) => (g.draw(this._drawables), g.fontTypeMetrics(a, s)))));
  }
  /**
   * Adds a {@link DrawableGravity} to the drawables.
   * @param value The gravity to use.
   */
  gravity(a) {
    return this._drawables.push(new Io(a)), this;
  }
  /**
   * Adds a {@link DrawableLine} to the drawables.
   * @param startX The starting X coordinate.
   * @param startY The starting Y coordinate.
   * @param endX The ending X coordinate.
   * @param endY The ending Y coordinate.
   */
  line(a, s, i, g) {
    return this._drawables.push(new yo(a, s, i, g)), this;
  }
  /**
   * Adds a {@link DrawablePoint} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   */
  point(a, s) {
    return this._drawables.push(new Co(a, s)), this;
  }
  /**
   * Adds a {@link DrawableRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   */
  rectangle(a, s, i, g) {
    return this._drawables.push(new Do(a, s, i, g)), this;
  }
  /**
   * Adds a {@link DrawableRoundRectangle} to the drawables.
   * @param upperLeftX The upper left X coordinate.
   * @param upperLeftY The upper left Y coordinate.
   * @param lowerRightX The lower right X coordinate.
   * @param lowerRightY The lower right Y coordinate.
   * @param cornerWidth The corner width.
   * @param cornerHeight The corner height.
   */
  roundRectangle(a, s, i, g, m, p) {
    return this._drawables.push(new Po(a, s, i, g, m, p)), this;
  }
  /**
   * Adds a {@link DrawableStrokeColor} to the drawables.
   * @param color The color to use.
   */
  strokeColor(a) {
    return this._drawables.push(new Eo(a)), this;
  }
  /**
   * Adds a {@link DrawableStrokeWidth} to the drawables.
   * @param width The width.
   */
  strokeWidth(a) {
    return this._drawables.push(new To(a)), this;
  }
  /**
   * Adds a {@link DrawableText} to the drawables.
   * @param x The X coordinate.
   * @param y The Y coordinate.
   * @param value The text to draw.
   */
  text(a, s, i) {
    return this._drawables.push(new Lo(a, s, i)), this;
  }
  /**
   * Adds a {@link DrawableTextAlignment} to the drawables.
   * @param alignment The text alignment.
   */
  textAlignment(a) {
    return this._drawables.push(new Go(a)), this;
  }
  /**
   * Adds a {@link DrawableTextDecoration} to the drawables.
   * @param decoration The text decoration.
   */
  textDecoration(a) {
    return this._drawables.push(new bo(a)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterlineSpacing(a) {
    return this._drawables.push(new Ao(a)), this;
  }
  /**
   * Adds a {@link DrawableTextInterlineSpacing} to the drawables.
   * @param spacing The spacing to use.
   */
  textInterwordSpacing(a) {
    return this._drawables.push(new Ro(a)), this;
  }
  /**
   * Adds a {@link DrawableTextKerning} to the drawables.
   * @param kerning The kerning to use.
   */
  textKerning(a) {
    return this._drawables.push(new xo(a)), this;
  }
  /**
   * Adds a {@link DrawableTextUnderColor} to the drawables.
   * @param color The color to use.
   */
  textUnderColor(a) {
    return this._drawables.push(new Fo(a)), this;
  }
  /**
   * Draw on the specified image.
   * @param image The image to draw on.
   */
  draw(a) {
    return a.draw(this._drawables), this;
  }
}
const Qo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Kapur.
   */
  Kapur: 1,
  /**
   * OTSU.
   */
  OTSU: 2,
  /**
   * Triangle.
   */
  Triangle: 3
}, Ko = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Direct.
   */
  Direct: 1,
  /**
   * Pseudo.
   */
  Pseudo: 2
}, Oo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Bilevel.
   */
  Bilevel: 1,
  /**
   * Grayscale.
   */
  Grayscale: 2,
  /**
   * Grayscale alpha.
   */
  GrayscaleAlpha: 3,
  /**
   * Palette.
   */
  Palette: 4,
  /**
   * Palette alpha.
   */
  PaletteAlpha: 5,
  /**
   * Truecolor.
   */
  TrueColor: 6,
  /**
   * Truecolor alpha.
   */
  TrueColorAlpha: 7,
  /**
   * Color separation.
   */
  ColorSeparation: 8,
  /**
   * Color separation alpha.
   */
  ColorSeparationAlpha: 9,
  /**
   * Optimize.
   */
  Optimize: 10,
  /**
   * Palette bilevel alpha.
   */
  PaletteBilevelAlpha: 11
}, Jo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Add.
   */
  Add: 1,
  /**
   * Conjugate.
   */
  Conjugate: 2,
  /**
   * Divide.
   */
  Divide: 3,
  /**
   * Magnitude phase.
   */
  MagnitudePhase: 4,
  /**
   * Multiply.
   */
  Multiply: 5,
  /**
   * Real imaginary.
   */
  RealImaginary: 6,
  /**
   * Subtract.
   */
  Subtract: 7
}, Bo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * B44A.
   */
  B44A: 1,
  /**
   * B44.
   */
  B44: 2,
  /**
   * BZip.
   */
  BZip: 3,
  /**
   * DXT1.
   */
  DXT1: 4,
  /**
   * DXT3.
   */
  DXT3: 5,
  /**
   * DXT5.
   */
  DXT5: 6,
  /**
   * Fax.
   */
  Fax: 7,
  /**
   * Group4.
   */
  Group4: 8,
  /**
   * JBIG1.
   */
  JBIG1: 9,
  /**
   * JBIG2.
   */
  JBIG2: 10,
  /**
   * JPEG2000.
   */
  JPEG2000: 11,
  /**
   * JPEG.
   */
  JPEG: 12,
  /**
   * Lossless JPEG.
   */
  LosslessJPEG: 13,
  /**
   * LZMA.
   */
  LZMA: 14,
  /**
   * LZW.
   */
  LZW: 15,
  /**
   * No compression.
   */
  NoCompression: 16,
  /**
   * Piz.
   */
  Piz: 17,
  /**
   * Pxr24.
   */
  Pxr24: 18,
  /**
   * RLE.
   */
  RLE: 19,
  /**
   * Zip.
   */
  Zip: 20,
  /**
   * ZipS.
   */
  ZipS: 21,
  /**
   * Zstd.
   */
  Zstd: 22,
  /**
   * WebP.
   */
  WebP: 23,
  /**
   * DWAA.
   */
  DWAA: 24,
  /**
   * DWAB.
   */
  DWAB: 25,
  /**
   * BC7.
   */
  BC7: 26,
  /**
   * BC6.
   */
  BC5: 27
}, Zo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Affine.
   */
  Affine: 1,
  /**
   * Affine projection.
   */
  AffineProjection: 2,
  /**
   * Scale rotate translate.
   */
  ScaleRotateTranslate: 3,
  /**
   * Perspective.
   */
  Perspective: 4,
  /**
   * Perspective projection.
   */
  PerspectiveProjection: 5,
  /**
   * Bilinear forward.
   */
  BilinearForward: 6,
  /**
   * Bilinear reverse.
   */
  BilinearReverse: 7,
  /**
   * Polynomial.
   */
  Polynomial: 8,
  /**
   * Arc.
   */
  Arc: 9,
  /**
   * Polar.
   */
  Polar: 10,
  /**
   * De-polar.
   */
  DePolar: 11,
  /**
   * Cylinder 2 plane.
   */
  Cylinder2Plane: 12,
  /**
   * Plane 2 cylinder.
   */
  Plane2Cylinder: 13,
  /**
   * Barrel.
   */
  Barrel: 14,
  /**
   * Barrel inverse.
   */
  BarrelInverse: 15,
  /**
   * Shepards.
   */
  Shepards: 16,
  /**
   * Resize.
   */
  Resize: 17,
  /**
   * Sentinel.
   */
  Sentinel: 18,
  /**
   * Rigid affine.
   */
  RigidAffine: 19
}, e_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Least significant bit, byte 0 is least significant.
   */
  LSB: 1,
  /**
   * Most significant bit, byte 0 is most significant.
   */
  MSB: 2
}, t_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Absolute.
   */
  Absolute: 1,
  /**
   * Fuzz.
   */
  Fuzz: 2,
  /**
   * Mean absolute.
   */
  MeanAbsolute: 3,
  /**
   * Mean error per pixel.
   */
  MeanErrorPerPixel: 4,
  /**
   * Mean squared.
   */
  MeanSquared: 5,
  /**
   * Normalized cross correlation.
   */
  NormalizedCrossCorrelation: 6,
  /**
   * Peak absolute.
   */
  PeakAbsolute: 7,
  /**
   * Peak signal to noise ratio.
   */
  PeakSignalToNoiseRatio: 8,
  /**
   * Perceptual hash.
   */
  PerceptualHash: 9,
  /**
   * Root mean squared.
   */
  RootMeanSquared: 10,
  /**
   * Structural similarity.
   */
  StructuralSimilarity: 11,
  /**
   * Structural dissimilarity.
   */
  StructuralDissimilarity: 12
}, i_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Abs.
   */
  Abs: 1,
  /**
   * Add.
   */
  Add: 2,
  /**
   * Add modulus.
   */
  AddModulus: 3,
  /**
   * And.
   */
  And: 4,
  /**
   * Cosine.
   */
  Cosine: 5,
  /**
   * Divide.
   */
  Divide: 6,
  /**
   * Exponential.
   */
  Exponential: 7,
  /**
   * Gaussian noise.
   */
  GaussianNoise: 8,
  /**
   * Impulse noise.
   */
  ImpulseNoise: 9,
  /**
   * Laplacian noise.
   */
  LaplacianNoise: 10,
  /**
   * Left shift.
   */
  LeftShift: 11,
  /**
   * Log.
   */
  Log: 12,
  /**
   * Max.
   */
  Max: 13,
  /**
   * Mean.
   */
  Mean: 14,
  /**
   * Median.
   */
  Median: 15,
  /**
   * Min.
   */
  Min: 16,
  /**
   * Multiplicative noise.
   */
  MultiplicativeNoise: 17,
  /**
   * Multiply.
   */
  Multiply: 18,
  /**
   * Or.
   */
  Or: 19,
  /**
   * Poisson noise.
   */
  PoissonNoise: 20,
  /**
   * Pow.
   */
  Pow: 21,
  /**
   * Right shift.
   */
  RightShift: 22,
  /**
   * Root mean square.
   */
  RootMeanSquare: 23,
  /**
   * Set.
   */
  Set: 24,
  /**
   * Sine.
   */
  Sine: 25,
  /**
   * Subtract.
   */
  Subtract: 26,
  /**
   * Sum.
   */
  Sum: 27,
  /**
   * Threshold black.
   */
  ThresholdBlack: 28,
  /**
   * Threshold.
   */
  Threshold: 29,
  /**
   * Threshold white.
   */
  ThresholdWhite: 30,
  /**
   * Uniform noise.
   */
  UniformNoise: 31,
  /**
   * Xor.
   */
  Xor: 32,
  /**
   * Inverse log.
   */
  InverseLog: 33
}, r_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Point.
   */
  Point: 1,
  /**
   * Box.
   */
  Box: 2,
  /**
   * Triangle.
   */
  Triangle: 3,
  /**
   * Hermite.
   */
  Hermite: 4,
  /**
   * Hann.
   */
  Hann: 5,
  /**
   * Hamming.
   */
  Hamming: 6,
  /**
   * Blackman.
   */
  Blackman: 7,
  /**
   * Gaussian.
   */
  Gaussian: 8,
  /**
   * Quadratic.
   */
  Quadratic: 9,
  /**
   * Cubic.
   */
  Cubic: 10,
  /**
   * Catrom.
   */
  Catrom: 11,
  /**
   * Mitchell.
   */
  Mitchell: 12,
  /**
   * Jinc.
   */
  Jinc: 13,
  /**
   * Sinc.
   */
  Sinc: 14,
  /**
   * Sinc fast.
   */
  SincFast: 15,
  /**
   * Kaiser.
   */
  Kaiser: 16,
  /**
   * Welch.
   */
  Welch: 17,
  /**
   * Parzen.
   */
  Parzen: 18,
  /**
   * Bohman.
   */
  Bohman: 19,
  /**
   * Bartlett.
   */
  Bartlett: 20,
  /**
   * Lagrange.
   */
  Lagrange: 21,
  /**
   * Lanczos.
   */
  Lanczos: 22,
  /**
   * Lanczos sharp.
   */
  LanczosSharp: 23,
  /**
   * Lanczos 2.
   */
  Lanczos2: 24,
  /**
   * Lanczos 2 sharp.
   */
  Lanczos2Sharp: 25,
  /**
   * Robidoux.
   */
  Robidoux: 26,
  /**
   * Robidoux sharp.
   */
  RobidouxSharp: 27,
  /**
   * Cosine.
   */
  Cosine: 28,
  /**
   * Spline.
   */
  Spline: 29,
  /**
   * Lanczos radius.
   */
  LanczosRadius: 30,
  /**
   * Cubic spline.
   */
  CubicSpline: 31
}, a_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * None.
   */
  None: 1,
  /**
   * Background.
   */
  Background: 2,
  /**
   * Previous.
   */
  Previous: 3
}, zo = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * No interlacing.
   */
  NoInterlace: 1,
  /**
   * Line.
   */
  Line: 2,
  /**
   * Plane.
   */
  Plane: 3,
  /**
   * Partition.
   */
  Partition: 4,
  /**
   * Gif.
   */
  Gif: 5,
  /**
   * Jpeg.
   */
  Jpeg: 6,
  /**
   * Png.
   */
  Png: 7
}, n_ = {
  /**
   * Undefined.
   */
  Undefined: "Undefined",
  /**
   * Unity.
   */
  Unity: "Unity",
  /**
   * Gaussian.
   */
  Gaussian: "Gaussian",
  /**
   * DoG.
   */
  DoG: "DoG",
  /**
   * LoG.
   */
  LoG: "LoG",
  /**
   * Blur.
   */
  Blur: "Blur",
  /**
   * Comet.
   */
  Comet: "Comet",
  /**
   * Binomial.
   */
  Binomial: "Binomial",
  /**
   * Laplacian.
   */
  Laplacian: "Laplacian",
  /**
   * Sobel.
   */
  Sobel: "Sobel",
  /**
   * Frei chen.
   */
  FreiChen: "FreiChen",
  /**
   * Roberts.
   */
  Roberts: "Roberts",
  /**
   * Prewitt.
   */
  Prewitt: "Prewitt",
  /**
   * Compass.
   */
  Compass: "Compass",
  /**
   * Kirsch.
   */
  Kirsch: "Kirsch",
  /**
   * Diamond.
   */
  Diamond: "Diamond",
  /**
   * Square.
   */
  Square: "Square",
  /**
   * Rectangle.
   */
  Rectangle: "Rectangle",
  /**
   * Octagon.
   */
  Octagon: "Octagon",
  /**
   * Disk.
   */
  Disk: "Disk",
  /**
   * Plus.
   */
  Plus: "Plus",
  /**
   * Cross.
   */
  Cross: "Cross",
  /**
   * Ring.
   */
  Ring: "Ring",
  /**
   * Peaks.
   */
  Peaks: "Peaks",
  /**
   * Edges.
   */
  Edges: "Edges",
  /**
   * Corners.
   */
  Corners: "Corners",
  /**
   * Diagonals.
   */
  Diagonals: "Diagonals",
  /**
   * Line ends.
   */
  LineEnds: "LineEnds",
  /**
   * Line junctions.
   */
  LineJunctions: "LineJunctions",
  /**
   * Ridges.
   */
  Ridges: "Ridges",
  /**
   * Convex hull.
   */
  ConvexHull: "ConvexHull",
  /**
   * Thin SE.
   */
  ThinSE: "ThinSE",
  /**
   * Skeleton.
   */
  Skeleton: "Skeleton",
  /**
   * Chebyshev.
   */
  Chebyshev: "Chebyshev",
  /**
   * Manhattan.
   */
  Manhattan: "Manhattan",
  /**
   * Octagonal.
   */
  Octagonal: "Octagonal",
  /**
   * Euclidean.
   */
  Euclidean: "Euclidean",
  /**
   * User defined.
   */
  UserDefined: "UserDefined"
}, s_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Convolve.
   */
  Convolve: 1,
  /**
   * Correlate.
   */
  Correlate: 2,
  /**
   * Erode.
   */
  Erode: 3,
  /**
   * Dilate.
   */
  Dilate: 4,
  /**
   * Erode intensity.
   */
  ErodeIntensity: 5,
  /**
   * Dilate intensity.
   */
  DilateIntensity: 6,
  /**
   * Iterative distance.
   */
  IterativeDistance: 7,
  /**
   * Open.
   */
  Open: 8,
  /**
   * Close.
   */
  Close: 9,
  /**
   * Open intensity.
   */
  OpenIntensity: 10,
  /**
   * Close intensity.
   */
  CloseIntensity: 11,
  /**
   * Smooth.
   */
  Smooth: 12,
  /**
   * Edge in.
   */
  EdgeIn: 13,
  /**
   * Edge out.
   */
  EdgeOut: 14,
  /**
   * Edge.
   */
  Edge: 15,
  /**
   * Top hat.
   */
  TopHat: 16,
  /**
   * Bottom hat.
   */
  BottomHat: 17,
  /**
   * Hit and miss.
   */
  HitAndMiss: 18,
  /**
   * Thinning.
   */
  Thinning: 19,
  /**
   * Thicken.
   */
  Thicken: 20,
  /**
   * Distance.
   */
  Distance: 21,
  /**
   * Voronoi.
   */
  Voronoi: 22
}, o_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Uniform.
   */
  Uniform: 1,
  /**
   * Gaussian.
   */
  Gaussian: 2,
  /**
   * Multiplicative Gaussian.
   */
  MultiplicativeGaussian: 3,
  /**
   * Impulse.
   */
  Impulse: 4,
  /**
   * Laplacian.
   */
  Laplacian: 5,
  /**
   * Poisson.
   */
  Poisson: 6,
  /**
   * Random.
   */
  Random: 7
}, No = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Top left.
   */
  TopLeft: 1,
  /**
   * Top right.
   */
  TopRight: 2,
  /**
   * Bottom right.
   */
  BottomRight: 3,
  /**
   * Bottom left.
   */
  BottomLeft: 4,
  /**
   * Left top.
   */
  LeftTop: 5,
  /**
   * Right top.
   */
  RightTop: 6,
  /**
   * Right bottom.
   */
  RightBottom: 7,
  /**
   * Left bottom.
   */
  LeftBottom: 8
}, __ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Select the target pixel.
   */
  Point: 1,
  /**
   * Select any pixel that matches the target pixel.
   */
  Replace: 2,
  /**
   * Select the target pixel and matching neighbors.
   */
  Floodfill: 3,
  /**
   * Select the target pixel and neighbors not matching border color.
   */
  FillToBorder: 4,
  /**
   * Select all pixels.
   */
  Reset: 5
}, c_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Average.
   */
  Average: 1,
  /**
   * Average9.
   */
  Average9: 2,
  /**
   * Average16.
   */
  Average16: 3,
  /**
   * Background.
   */
  Background: 4,
  /**
   * Bilinear.
   */
  Bilinear: 5,
  /**
   * Blend.
   */
  Blend: 6,
  /**
   * Catrom.
   */
  Catrom: 7,
  /**
   * Integer.
   */
  Integer: 8,
  /**
   * Mesh.
   */
  Mesh: 9,
  /**
   * Nearest.
   */
  Nearest: 10,
  /**
   * Spline.
   */
  Spline: 11
}, l_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Saturation.
   */
  Saturation: 1,
  /**
   * Perceptual.
   */
  Perceptual: 2,
  /**
   * Absolute.
   */
  Absolute: 3,
  /**
   * Relative.
   */
  Relative: 4
}, g_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Left.
   */
  Left: 1,
  /**
   * Center.
   */
  Center: 2,
  /**
   * Right.
   */
  Right: 3
}, u_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * None.
   */
  None: 1,
  /**
   * Underline.
   */
  Underline: 2,
  /**
   * Overline.
   */
  Overline: 3,
  /**
   * Line through.
   */
  LineThrough: 4
}, h_ = {
  /**
   * Undefined.
   */
  Undefined: 0,
  /**
   * Background.
   */
  Background: 1,
  /**
   * Dither.
   */
  Dither: 2,
  /**
   * Edge.
   */
  Edge: 3,
  /**
   * Mirror.
   */
  Mirror: 4,
  /**
   * Random.
   */
  Random: 5,
  /**
   * Tile.
   */
  Tile: 6,
  /**
   * Transparent.
   */
  Transparent: 7,
  /**
   * Mask.
   */
  Mask: 8,
  /**
   * Black.
   */
  Black: 9,
  /**
   * Gray.
   */
  Gray: 10,
  /**
   * White.
   */
  White: 11,
  /**
   * Horizontal tile.
   */
  HorizontalTile: 12,
  /**
   * Vertical tile.
   */
  VerticalTile: 13,
  /**
   * Horizontal tile edge.
   */
  HorizontalTileEdge: 14,
  /**
   * Vertical tile edge.
   */
  VerticalTileEdge: 15,
  /**
   * Checker tile.
   */
  CheckerTile: 16
};
var Ho = /* @__PURE__ */ ((S) => (S[S.Disabled = -1] = "Disabled", S[S.Linear = 0] = "Linear", S[S.Vng = 1] = "Vng", S[S.Ppg = 2] = "Ppg", S[S.Ahd = 3] = "Ahd", S[S.DCB = 4] = "DCB", S[S.Dht = 11] = "Dht", S[S.ModifiedAhd = 12] = "ModifiedAhd", S))(Ho || {}), $o = /* @__PURE__ */ ((S) => (S[S.Raw = 0] = "Raw", S[S.SRGB = 1] = "SRGB", S[S.AdobeRGB = 2] = "AdobeRGB", S[S.WideGamutRGB = 3] = "WideGamutRGB", S[S.KodakProPhotoRGB = 4] = "KodakProPhotoRGB", S[S.XYZ = 5] = "XYZ", S[S.ACES = 6] = "ACES", S))($o || {});
class d_ extends Js {
  constructor() {
    super(Re.Dng);
  }
  /**
   * Gets or sets a value indicating wether auto brightness should be used (dng:no-auto-bright).
   */
  disableAutoBrightness;
  /**
   * Gets or sets a value indicating the interpolation quality (dng:interpolation-quality).
   */
  interpolationQuality;
  /**
   * Gets or sets the output color (dng:output-color).
   */
  outputColor;
  /**
  * Gets or sets a value indicating wether auto whitebalance should be used (dng:use-auto-wb).
  */
  useAutoWhitebalance;
  /**
   * Gets or sets a value indicating wether the whitebalance of the camera should be used (dng:use-camera-wb).
   */
  useCameraWhitebalance;
  getDefines() {
    const a = [];
    return this.hasValue(this.interpolationQuality) && a.push(this.createDefine("interpolation-quality", this.interpolationQuality)), this.hasValue(this.disableAutoBrightness) && a.push(this.createDefine("no-auto-bright", this.disableAutoBrightness)), this.hasValue(this.outputColor) && a.push(this.createDefine("output-color", this.outputColor)), this.hasValue(this.useCameraWhitebalance) && a.push(this.createDefine("use-camera-wb", this.useCameraWhitebalance)), this.hasValue(this.useAutoWhitebalance) && a.push(this.createDefine("use-auto-wb", this.useAutoWhitebalance)), a;
  }
}
class vr {
  _colorSpace = E.Undefined;
  _compression = Bo.Undefined;
  _density = new tt(0, 0);
  _format = Re.Unknown;
  _height = 0;
  _interlace = zo.Undefined;
  _orientation = No.Undefined;
  _quality = 0;
  _width = 0;
  get colorSpace() {
    return this._colorSpace;
  }
  get compression() {
    return this._compression;
  }
  get density() {
    return this._density;
  }
  get format() {
    return this._format;
  }
  get height() {
    return this._height;
  }
  get interlace() {
    return this._interlace;
  }
  get orientation() {
    return this._orientation;
  }
  get quality() {
    return this._quality;
  }
  get width() {
    return this._width;
  }
  constructor() {
  }
  read(a, s) {
    ae._create((i) => {
      i.ping(a, s), this._colorSpace = i.colorSpace, this._compression = i.compression, this._density = i.density, this._format = i.format, this._height = i.height, this._interlace = i.interlace, this._orientation = i.orientation, this._quality = i.quality, this._width = i.width;
    });
  }
  static create(a, s) {
    const i = new vr();
    return i.read(a, s), i;
  }
}
class m_ {
  /**
   * Initializes a new instance of the {@link ComplexSettings} class.
   * @param complexOperator The complex operator.
   */
  constructor(a) {
    this.complexOperator = a;
  }
  /**F
   * Gets or sets the complex operator.
   **/
  complexOperator;
  /**
   * Gets or sets the signal to noise ratio.
   **/
  signalToNoiseRatio;
  /** @internal */
  _setArtifacts(a) {
    this.signalToNoiseRatio !== void 0 && a.setArtifact("complex:snr", this.signalToNoiseRatio);
  }
}
class p_ {
  constructor(a) {
    this.method = a;
  }
  /**
   * Gets the distortion method to use.
   */
  method;
  /**
   * Gets or sets a value indicating whether distort attempt to 'bestfit' the size of the resulting image.
   */
  bestFit = !1;
  /**
   * Gets or sets a value to scale the size of the output canvas by this amount to provide a method of
   * Zooming, and for super-sampling the results.
   */
  scale;
  /**
   * Gets or sets the viewport that directly set the output image canvas area and offest to use for the
   * resulting image, rather than use the original images canvas, or a calculated 'bestfit' canvas.
   */
  viewport;
  /** @internal */
  _setArtifacts(a) {
    this.scale !== void 0 && a.setArtifact("distort:scale", this.scale.toString()), this.viewport !== void 0 && a.setArtifact("distort:viewport", this.viewport.toString());
  }
}
class Uo extends Ue {
  constructor(a) {
    const s = l._api._MontageSettings_Create(), i = l._api._MontageSettings_Dispose;
    if (super(s, i), a.backgroundColor !== void 0 && a.backgroundColor._use((g) => {
      l._api._MontageSettings_SetBackgroundColor(this._instance, g);
    }), a.borderColor !== void 0 && a.borderColor._use((g) => {
      l._api._MontageSettings_SetBorderColor(this._instance, g);
    }), a.borderWidth !== void 0 && l._api._MontageSettings_SetBorderWidth(this._instance, a.borderWidth), a.fillColor !== void 0 && a.fillColor._use((g) => {
      l._api._MontageSettings_SetFillColor(this._instance, g);
    }), a.font !== void 0) {
      const g = Te._getFontFileName(a.font);
      b(g, (m) => {
        l._api._MontageSettings_SetFont(this._instance, m);
      });
    }
    a.fontPointsize !== void 0 && l._api._MontageSettings_SetFontPointsize(this._instance, a.fontPointsize), a.frameGeometry !== void 0 && b(a.frameGeometry.toString(), (g) => {
      l._api._MontageSettings_SetFrameGeometry(this._instance, g);
    }), a.geometry !== void 0 && b(a.geometry.toString(), (g) => {
      l._api._MontageSettings_SetGeometry(this._instance, g);
    }), a.gravity !== void 0 && l._api._MontageSettings_SetGravity(this._instance, a.gravity), a.shadow !== void 0 && l._api._MontageSettings_SetShadow(this._instance, a.shadow ? 1 : 0), a.strokeColor !== void 0 && a.strokeColor._use((g) => {
      l._api._MontageSettings_SetStrokeColor(this._instance, g);
    }), a.textureFileName !== void 0 && b(a.textureFileName, (g) => {
      l._api._MontageSettings_SetTextureFileName(this._instance, g);
    }), a.tileGeometry !== void 0 && b(a.tileGeometry.toString(), (g) => {
      l._api._MontageSettings_SetTileGeometry(this._instance, g);
    }), a.title !== void 0 && b(a.title, (g) => {
      l._api._MontageSettings_SetTitle(this._instance, g);
    });
  }
}
class f_ {
  /**
   * Gets or sets the color of the background that thumbnails are composed on.
   */
  backgroundColor;
  /**
   * Gets or sets the frame border color.
   */
  borderColor;
  /**
   * Gets or sets the pixels between thumbnail and surrounding frame.
   */
  borderWidth;
  /**
   * Gets or sets the fill color.
   */
  fillColor;
  /**
   * Gets or sets the label font.
   */
  font;
  /**
   * Gets or sets the font point size.
   */
  fontPointsize;
  /**
   * Gets or sets the frame geometry (width & height frame thickness).
   */
  frameGeometry;
  /**
   * Gets or sets the thumbnail width & height plus border width &amp; height.
   */
  geometry;
  /**
   * Gets or sets the thumbnail position (e.g. Southwest).
   */
  gravity;
  /**
   * Gets or sets the thumbnail label (applied to image prior to montage).
   */
  label;
  /**
   * Gets or sets a value indicating whether drop-shadows on thumbnails are enabled or disabled.
   */
  shadow;
  /**
   * Gets or sets the outline color.
   */
  strokeColor;
  /**
   * Gets or sets the background texture image.
   */
  textureFileName;
  /**
   * Gets or sets the frame geometry (width &amp; height frame thickness).
   */
  tileGeometry;
  /**
   * Gets or sets the montage title.
   */
  title;
  /**
   * Gets or sets the transparent color.
   */
  transparentColor;
  _use(a) {
    const s = new Uo(this);
    return ce._disposeAfterExecution(s, a);
  }
}
class M_ {
  constructor(a, s, i) {
    this.method = a, this.kernel = s, i !== void 0 && (this.kernel += `:${i}`);
  }
  /**
   * Gets or sets the channels to apply the kernel to.
   */
  channels = X.Composite;
  /**
   * Gets or sets the bias to use when the method is Convolve.
   */
  convolveBias;
  /**
   * Gets or sets the scale to use when the method is Convolve.
   */
  convolveScale;
  /**
   * Gets or sets the number of iterations.
   */
  iterations = 1;
  /**
   * Gets or sets built-in kernel.
   */
  kernel;
  /**
   * Gets or sets the morphology method.
   */
  method;
}
class k_ {
  /**
   * Initializes a new instance of the {@link Threshold} class.
   * @param minimum The minimum value of the threshold.
   * @param maximum The maximum value of the threshold (or 0 if no maximum).
   */
  constructor(a, s = 0) {
    this.minimum = a, this.maximum = s;
  }
  /**
   * Gets the minimum of this threshold.
   */
  minimum;
  /**
  * Gets the maximum of this threshold.
  */
  maximum;
  /**
   * Convert the threshold to a string.
   */
  toString() {
    return this.maximum === 0 ? this.minimum.toString() : `${this.minimum}-${this.maximum}`;
  }
}
export {
  ro as AlphaAction,
  Qo as AutoThresholdMethod,
  et as ChannelPerceptualHash,
  fo as ChannelStatistics,
  X as Channels,
  ao as ChromaticityInfo,
  Ko as ClassType,
  oo as ColorProfile,
  E as ColorSpace,
  _r as ColorSpaceNames,
  cr as ColorTransformMode,
  Oo as ColorType,
  oi as CompareResult,
  _o as CompareSettings,
  Jo as ComplexOperator,
  m_ as ComplexSettings,
  ti as CompositeOperator,
  Bo as CompressionMethod,
  sr as ConfigurationFile,
  ni as ConfigurationFiles,
  _i as ConnectedComponent,
  lo as ConnectedComponentsSettings,
  Js as DefinesCreator,
  tt as Density,
  Ne as DensityUnit,
  Zo as DistortMethod,
  p_ as DistortSettings,
  kr as DitherMethod,
  Ho as DngInterpolation,
  $o as DngOutputColor,
  d_ as DngReadDefines,
  jo as DrawableColor,
  Zs as DrawableFillColor,
  eo as DrawableFillOpacity,
  wo as DrawableFont,
  to as DrawableFontPointSize,
  Io as DrawableGravity,
  yo as DrawableLine,
  Co as DrawablePoint,
  Do as DrawableRectangle,
  Po as DrawableRoundRectangle,
  Eo as DrawableStrokeColor,
  To as DrawableStrokeWidth,
  Lo as DrawableText,
  Go as DrawableTextAlignment,
  ut as DrawableTextAntialias,
  bo as DrawableTextDecoration,
  Ao as DrawableTextInterlineSpacing,
  Ro as DrawableTextInterwordSpacing,
  xo as DrawableTextKerning,
  Fo as DrawableTextUnderColor,
  qo as Drawables,
  Gt as DrawingWand,
  e_ as Endian,
  t_ as ErrorMetric,
  i_ as EvaluateOperator,
  r_ as FilterType,
  a_ as GifDisposeMethod,
  de as Gravity,
  l as ImageMagick,
  mr as ImageProfile,
  zo as Interlace,
  n_ as Kernel,
  io as LogEvent,
  Q as LogEventTypes,
  Te as Magick,
  k as MagickColor,
  Wo as MagickColors,
  ei as MagickDefine,
  U as MagickError,
  bt as MagickErrorInfo,
  ii as MagickErrorSeverity,
  Re as MagickFormat,
  Ae as MagickFormatInfo,
  _e as MagickGeometry,
  ae as MagickImage,
  Pe as MagickImageCollection,
  vr as MagickImageInfo,
  Ee as MagickReadSettings,
  gt as MagickSettings,
  f_ as MontageSettings,
  s_ as MorphologyMethod,
  M_ as MorphologySettings,
  Ue as NativeInstance,
  o_ as NoiseType,
  No as Orientation,
  __ as PaintMethod,
  Z as Percentage,
  fe as PerceptualHash,
  F as PixelChannel,
  it as PixelCollection,
  po as PixelIntensityMethod,
  c_ as PixelInterpolateMethod,
  De as Point,
  He as PrimaryInfo,
  vo as ProgressEvent,
  ai as QuantizeSettings,
  $e as Quantum,
  l_ as RenderingIntent,
  gi as Statistics,
  g_ as TextAlignment,
  u_ as TextDecoration,
  k_ as Threshold,
  ci as TypeMetric,
  h_ as VirtualPixelMethod,
  hr as WarningEvent,
  uo as _getEdges,
  dr as _isByteArray,
  Xo as initializeImageMagick
};
