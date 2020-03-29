// Source: https://en.wikipedia.org/wiki/List_of_Unicode_characters
module.exports = [
  {
    label: 'Latin',
    ranges: [
      // Basic Latin
      [ 0x0020, 0x007F ],
      // Latin-1 Supplement
      [ 0x00A0, 0x00FF ],
      // Latin Extended-A
      [ 0x0100, 0x017F ],
      // Latin Extended-B
      [ 0x0180, 0x024F ],
      // Enclosed Alphanumeric Supplement
      [ 0x1F100, 0x1F1FF ],
    ]
  },
  {
    label: 'Greek',
    ranges:[
      // Greek and Coptic
      [ 0x0370, 0x03FF ],
      // Greek Extended
      [ 0x1F00, 0x1FFF ],
    ]
  },
  {
    label: 'Cyrillic',
    ranges:[
      // Cyrillic
      [ 0x0400, 0x04FF ],
      // Cyrillic Supplement
      [ 0x0500, 0x052F ],
      // Cyrillic Extended-A
      [ 0x2DE0, 0x2DFF ],
      // Cyrillic Extended-B
      [ 0xA640, 0xA69F ],
      // Cyrillic Extended-C
      [ 0x1C80, 0x1C8F ],
    ]
  },
  {
    label: 'Armenian',
    ranges:[
      [ 0x0530, 0x058F ],
    ]
  },
  {
    label: 'Georgian',
    ranges:[
      // Georgian
      [ 0x10A0, 0x10FF ],
      // Georgian Extended
      [ 0x1C90, 0x1CBF ],
      // Georgian Supplement
      [ 0x2D00, 0x2D2F ],
    ]
  },
  {
    label: 'Coptic',
    ranges:[
      [ 0x2C80, 0x2CFF ],
    ]
  },

  // Semitic languages
  // See https://en.wikipedia.org/wiki/List_of_Unicode_characters#Semitic_languages
  {
    label: 'Arabic',
    ranges:[
      // Arabic
      [ 0x0600, 0x06FF ],
      // Arabic Supplement
      [ 0x0750, 0x077F ],
      // Arabic Extended-A
      [ 0x08A0, 0x08FF ],
      // Arabic Presentation Forms-A
      [ 0xFB50, 0xFDFF ],
      // Arabic Presentation Forms-B
      [ 0xFE70, 0xFEFF ],
      // Rumi Numeral Symbols
      [ 0x10E60, 0x10E7F ],
      // Indic Siyaq Numbers
      [ 0x1EC70, 0x1ECBF ],
      // Ottoman Siyaq Numbers
      [ 0x1ED00, 0x1ED4F ],
      // Arabic Mathematical Alphabetic Symbols
      [ 0x1EE00, 0x1EEFF ],
    ]
  },
  {
    label: 'Hebrew',
    ranges:[
      // Hebrew
      [ 0x0590, 0x05FF ],
      // Alphabetic Presentation Forms
      [ 0xFB1D, 0xFB4F ],
    ]
  },
  {
    label: 'Syriac',
    ranges:[
      // Syriac
      [ 0x0700, 0x074F ],
      // Syriac Supplement
      [ 0x0860, 0x086F ],
    ]
  },
  {
    label: 'Samaritan',
    ranges:[
      [ 0x0800, 0x083F ],
    ]
  },
  {
    label: 'Mandaic',
    ranges:[
      [ 0x0840, 0x085F ],
    ]
  },

  {
    label: 'Thaana',
    ranges:[
      [ 0x0780, 0x07BF ],
    ]
  },

  // Brahmic scripts
  // See https://en.wikipedia.org/wiki/Brahmic_scripts#Unicode
  {
    label: 'Ahom',
    ranges: [
      [ 0x11700, 0x1173F ],
    ]
  },
  {
    label: 'Bali',
    ranges: [
      [ 0x1B00, 0x1B7F ],
    ]
  },
  {
    label: 'Batk',
    ranges: [
      [ 0x1BC0, 0x1BFF ],
    ]
  },
  {
    label: 'Tglg',
    ranges: [
      [ 0x1700, 0x171F ],
    ]
  },
  {
    label: 'Beng',
    ranges: [
      [ 0x0980, 0x09FF ],
    ]
  },
  {
    label: 'Bhks',
    ranges: [
      [ 0x11C00, 0x11C6F ],
    ]
  },
  {
    label: 'Buhd',
    ranges: [
      [ 0x1740, 0x175F ],
    ]
  },
  {
    label: 'Mymr',
    ranges: [
      [ 0x1000, 0x109F ],
      [ 0xA9E0, 0xA9FF ],
      [ 0xAA60, 0xAA7F ],
    ]
  },
  {
    label: 'Cakm',
    ranges: [
      [ 0x11100, 0x1114F ],
    ]
  },
  {
    label: 'Cham',
    ranges: [
      [ 0xAA00, 0xAA5F ],
    ]
  },
  {
    label: 'Deva',
    ranges: [
      [ 0x0900, 0x097F ],
      [ 0xA8E0, 0xA8FF ],
    ]
  },
  {
    label: 'Diak',
    ranges: [
      [ 0x11900, 0x1195F ],
    ]
  },
  {
    label: 'Dogr',
    ranges: [
      [ 0x11800, 0x1184F ],
    ]
  },
  {
    label: 'Gran',
    ranges: [
      [ 0x11300, 0x1137F ],
    ]
  },
  {
    label: 'Gujr',
    ranges: [
      [ 0x0A80, 0x0AFF ],
    ]
  },
  {
    label: 'Gong',
    ranges: [
      [ 0x11D60, 0x11DAF ],
    ]
  },
  {
    label: 'Guru',
    ranges: [
      [ 0x0A00, 0x0A7F ],
    ]
  },
  {
    label: 'Hano',
    ranges: [
      [ 0x1720, 0x173F ],
    ]
  },
  {
    label: 'Java',
    ranges: [
      [ 0xA980, 0xA9DF ],
    ]
  },
  {
    label: 'Kthi',
    ranges: [
      [ 0x11080, 0x110CF ],
    ]
  },
  {
    label: 'Knda',
    ranges: [
      [ 0x0C80, 0x0CFF ],
    ]
  },
  {
    label: 'Khmr',
    ranges: [
      [ 0x1780, 0x17FF ],
      [ 0x19E0, 0x19FF ],
    ]
  },
  {
    label: 'Khoj',
    ranges: [
      [ 0x11200, 0x1124F ],
    ]
  },
  {
    label: 'Sind',
    ranges: [
      [ 0x112B0, 0x112FF ],
    ]
  },
  {
    label: 'Laoo',
    ranges: [
      [ 0x0E80, 0x0EFF ],
    ]
  },
  {
    label: 'Lepc',
    ranges: [
      [ 0x1C00, 0x1C4F ],
    ]
  },
  {
    label: 'Limb',
    ranges: [
      [ 0x1900, 0x194F ],
    ]
  },
  {
    label: 'Bugi',
    ranges: [
      [ 0x1A00, 0x1A1F ],
    ]
  },
  {
    label: 'Mahj',
    ranges: [
      [ 0x11150, 0x1117F ],
    ]
  },
  {
    label: 'Maka',
    ranges: [
      [ 0x11EE0, 0x11EFF ],
    ]
  },
  {
    label: 'Mlym',
    ranges: [
      [ 0x0D00, 0x0D7F ],
    ]
  },
  {
    label: 'Marc',
    ranges: [
      [ 0x11C70, 0x11CBF ],
    ]
  },
  {
    label: 'Mtei',
    ranges: [
      [ 0xAAE0, 0xAAFF ],
      [ 0xABC0, 0xABFF ],
    ]
  },
  {
    label: 'Modi',
    ranges: [
      [ 0x11600, 0x1165F ],
    ]
  },
  {
    label: 'Mult',
    ranges: [
      [ 0x11280, 0x112AF ],
    ]
  },
  {
    label: 'Nand',
    ranges: [
      [ 0x119A0, 0x119FF ],
    ]
  },
  {
    label: 'Talu',
    ranges: [
      [ 0x1980, 0x19DF ],
    ]
  },
  {
    label: 'Orya',
    ranges: [
      [ 0x0B00, 0x0B7F ],
    ]
  },
  {
    label: 'Phag',
    ranges: [
      [ 0xA840, 0xA87F ],
    ]
  },
  {
    label: 'Newa',
    ranges: [
      [ 0x11400, 0x1147F ],
    ]
  },
  {
    label: 'Rjng',
    ranges: [
      [ 0xA930, 0xA95F ],
    ]
  },
  {
    label: 'Saur',
    ranges: [
      [ 0xA880, 0xA8DF ],
    ]
  },
  {
    label: 'Shrd',
    ranges: [
      [ 0x11180, 0x111DF ],
    ]
  },
  {
    label: 'Sidd',
    ranges: [
      [ 0x11580, 0x115FF ],
    ]
  },
  {
    label: 'Sinh',
    ranges: [
      [ 0x0D80, 0x0DFF ],
      [ 0x111E0, 0x111FF ],
    ]
  },
  {
    label: 'Sund',
    ranges: [
      [ 0x1B80, 0x1BBF ],
      [ 0x1CC0, 0x1CCF ],
    ]
  },
  {
    label: 'Sylo',
    ranges: [
      [ 0xA800, 0xA82F ],
    ]
  },
  {
    label: 'Tagb',
    ranges: [
      [ 0x1760, 0x177F ],
    ]
  },
  {
    label: 'Tale',
    ranges: [
      [ 0x1950, 0x197F ],
    ]
  },
  {
    label: 'Lana',
    ranges: [
      [ 0x1A20, 0x1AAF ],
    ]
  },
  {
    label: 'Tavt',
    ranges: [
      [ 0xAA80, 0xAADF ],
    ]
  },
  {
    label: 'Takr',
    ranges: [
      [ 0x11680, 0x116CF ],
    ]
  },
  {
    label: 'Taml',
    ranges: [
      [ 0x0B80, 0x0BFF ],
      [ 0x11FC0, 0x11FFF ],
    ]
  },
  {
    label: 'Telu',
    ranges: [
      [ 0x0C00, 0x0C7F ],
    ]
  },
  {
    label: 'Thai',
    ranges: [
      [ 0x0E00, 0x0E7F ],
    ]
  },
  {
    label: 'Tibt',
    ranges: [
      [ 0x0F00, 0x0FFF ],
    ]
  },
  {
    label: 'Tirh',
    ranges: [
      [ 0x11480, 0x114DF ],
    ]
  },

  // Other south and central Asian writing systems
  {
    label: 'Masaram Gondi',
    ranges:[
      [ 0x11D00, 0x11D5F ],
    ]
  },
  {
    label: 'Mro',
    ranges:[
      [ 0x16A40, 0x16A6F ],
    ]
  },
  {
    label: 'Sora Sompeng',
    ranges:[
      [ 0x110D0, 0x110FF ],
    ]
  },
  {
    label: 'Warang Citi',
    ranges:[
      [ 0x118A0, 0x118FF ],
    ]
  },

  // African scripts
  {
    label: 'Ethiopic',
    ranges: [
      // Ethiopic
      [ 0x1200, 0x137F ],
      // Ethiopic Supplement
      [ 0x1380, 0x139F ],
      // Ethiopic Extended
      [ 0x2D80, 0x2DDF ],
      // Ethiopic Extended-A
      [ 0xAB00, 0xAB2F ],
    ]
  },
  {
    label: 'Adlam',
    ranges:[
      [ 0x1E900, 0x1E95F ],
    ]
  },
  {
    label: 'Bamum',
    ranges:[
      // Bamum
      [ 0xA6A0, 0xA6FF ],
      // Bamum Supplement
      [ 0x16800, 0x16A3F ],
    ]
  },
  {
    label: 'Bassa Vah',
    ranges:[
      [ 0x16AD0, 0x16AFF ],
    ]
  },
  {
    label: 'Medefaidrin',
    ranges:[
      [ 0x16E40, 0x16E9F ],
    ]
  },
  {
    label: 'Mende Kikakui',
    ranges:[
      [ 0x1E800, 0x1E8DF ],
    ]
  },
  {
    label: 'NKo',
    ranges:[
      [ 0x07C0, 0x07FF ],
    ]
  },
  {
    label: 'Osmanya',
    ranges:[
      [ 0x10480, 0x104AF ],
    ]
  },
  {
    label: 'Ottoman Siyaq Numbers',
    ranges:[
      [ 0x1ED00, 0x1ED4F ],
    ]
  },
  {
    label: 'Tifinagh',
    ranges:[
      [ 0x2D30, 0x2D7F ],
    ]
  },
  {
    label: 'Vai',
    ranges:[
      [ 0xA500, 0xA63F ],
    ]
  },

  // American scripts
  {
    label: 'Cherokee',
    ranges:[
      // Cherokee
      [ 0x13A0, 0x13FF ],
      // Cherokee Supplement
      [ 0xAB70, 0xABBF ],
    ]
  },
  {
    label: 'Deseret',
    ranges:[
      [ 0x10400, 0x1044F ],
    ]
  },
  {
    label: 'Osage',
    ranges:[
      [ 0x104B0, 0x104FF ],
    ]
  },
  {
    label: 'Unified Canadian Aboriginal Syllabics',
    ranges:[
      // Unified Canadian Aboriginal Syllabics
      [ 0x1400, 0x167F ],
      // Unified Canadian Aboriginal Syllabics Extended
      [ 0x18B0, 0x18FF ],
    ]
  },
  {
    label: 'Aboriginal Syllabics',
    ranges:[
      [ 0x18B0, 0x18FF ],
    ]
  },

  {
    label: 'Mongolian',
    ranges:[
      // Mongolian
      [ 0x1800, 0x18AF ],
      // Mongolian Supplement
      [ 0x11660, 0x1167F ],
    ]
  },

  // East Asian
  {
    label: 'Bopomofo',
    ranges:[
      // Bopomofo
      [ 0x3100, 0x312F ],
      // Bopomofo Extended
      [ 0x31A0, 0x31BF ],
    ]
  },
  {
    label: 'CJK',
    ranges:[
      // CJK Unified Ideographs
      [ 0x4E00, 0x9FFF ],
      // CJK Unified Ideographs Extension A
      [ 0x3400, 0x4DBF ],
      // CJK Unified Ideographs Extension B
      [ 0x20000, 0x2A6DF ],
      // CJK Unified Ideographs Extension C
      [ 0x2A700, 0x2B73F ],
      // CJK Unified Ideographs Extension D
      [ 0x2B740, 0x2B81F ],
      // CJK Unified Ideographs Extension E
      [ 0x2B820, 0x2CEAF ],
      // CJK Unified Ideographs Extension F
      [ 0x2CEB0, 0x2EBEF ],
      // CJK Unified Ideographs Extension G
      [ 0x30000, 0x3134F ],
      // CJK Compatibility Ideographs
      [ 0xF900, 0xFAFF ],
      // CJK Compatibility
      [ 0x3300, 0x33FF ],
      // CJK Compatibility Forms
      [ 0xFE30, 0xFE4F ],
      // CJK Compatibility Ideographs
      [ 0xF900, 0xFAFF ],
      // CJK Compatibility Ideographs Supplement
      [ 0x2F800, 0x2FA1F ],
      // Enclosed CJK Letters and Months
      [ 0x3200, 0x32FF ],
      // Kangxi Radicals
      [ 0x2F00, 0x2FDF ],
      // Vertical Forms
      [ 0xFE10, 0xFE1F ],
      // Yi Syllables
      [ 0xA000, 0xA48F ],
      // Yi Radicals
      [ 0xA490, 0xA4CF ],
      // Yijing Hexagram Symbols
      [ 0x4DC0, 0x4DFF ],
      // Halfwidth and Fullwidth Forms
      [ 0xFF00, 0xFFEF ],
      // Tai Xuan Jing Symbols
      [ 0x1D300, 0x1D35F ],
      // Counting Rod Numerals
      [ 0x1D360, 0x1D37F ],
      // Enclosed Ideographic Supplement
      [ 0x1F200, 0x1F2FF ],
      // Ideographic Description Characters
      [ 0x2FF0, 0x2FFF ],
      // Ideographic Symbols and Punctuation
      [ 0x16FE0, 0x16FFF ],
      // Kanbun
      [ 0x3190, 0x319F ],
      // Khitan small script
      [ 0x18B00, 0x18CFF ],
    ]
  },
  {
    label: 'Hangul',
    ranges:[
      // Hangul Syllables
      [ 0xAC00, 0xD7A3 ],
      // Hangul Jamo
      [ 0x1100, 0x11FF ],
      // Hangul Compatibility Jamo
      [ 0x3130, 0x318F ],
      // Hangul Jamo Extended-A
      [ 0xA960, 0xA97F ],
      // Hangul Jamo Extended-B
      [ 0xD7B0, 0xD7FF ],
    ]
  },
  {
    label: 'Kana',
    ranges:[
      // Hiragana
      [ 0x3040, 0x309F ],
      // Katakana
      [ 0x30A0, 0x30FF ],
      // Kana Extended-A
      [ 0x1B100, 0x1B12F ],
      // Kana Supplement
      [ 0x1B000, 0x1B0FF ],
      // Katakana Phonetic Extensions
      [ 0x31F0, 0x31FF ],
      // Small Kana Extension
      [ 0x1B130, 0x1B16F ],
    ]
  },
  {
    label: 'Lisu',
    ranges:[
      // Lisu
      [ 0xA4D0, 0xA4FF ],
      // Lisu Supplement
      [ 0x11FB0, 0x11FBF ],
    ]
  },
  {
    label: 'Miao',
    ranges:[
      [ 0x16F00, 0x16F9F ],
    ]
  },
  {
    label: 'Nushu',
    ranges:[
      [ 0x1B170, 0x1B2FF ],
    ]
  },
  {
    label: 'Nyiakeng Puachue Hmong',
    ranges:[
      [ 0x1E100, 0x1E14F ],
    ]
  },
  {
    label: 'Tangut',
    ranges:[
      // Tangut
      [ 0x17000, 0x187FF ],
      // Tangut Components
      [ 0x18800, 0x18AFF ],
      // Tangut Supplement
      [ 0x18D00, 0x18D8F ],
    ]
  },
  {
    label: 'Wancho',
    ranges:[
      [ 0x1E2C0, 0x1E2FF ],
    ]
  },

  // Southeast Asian
  {
    label: 'Hanifi Rohingya',
    ranges:[
      [ 0x10D00, 0x10D3F ],
    ]
  },
  {
    label: 'Kayah Li',
    ranges:[
      [ 0xA900, 0xA92F ],
    ]
  },
  {
    label: 'Pahawh Hmong',
    ranges:[
      [ 0x16B00, 0x16B8F ],
    ]
  },
  {
    label: 'Pau Cin Hau',
    ranges:[
      [ 0x11AC0, 0x11AFF ],
    ]
  },
  {
    label: 'Meetei Mayek',
    ranges:[
      [ 0xABC0, 0xABFF ],
    ]
  },

  // Ancient and historic scripts
  {
    label: 'Aegean Numbers',
    ranges:[
      [ 0x10100, 0x1013F ],
    ]
  },
  {
    label: 'Anatolian Hieroglyphs',
    ranges:[
      [ 0x14400, 0x1467F ],
    ]
  },
  {
    label: 'Ancient Greek Numbers',
    ranges:[
      [ 0x10140, 0x1018F ],
    ]
  },
  {
    label: 'Ancient Symbols',
    ranges:[
      [ 0x10190, 0x101CF ],
    ]
  },
  {
    label: 'Avestan',
    ranges:[
      [ 0x10B00, 0x10B3F ],
    ]
  },
  {
    label: 'Carian',
    ranges:[
      [ 0x102A0, 0x102DF ],
    ]
  },
  {
    label: 'Caucasian Albanian',
    ranges:[
      [ 0x10530, 0x1056F ],
    ]
  },
  {
    label: 'Chorasmian',
    ranges:[
      [ 0x10FB0, 0x10FDF ],
    ]
  },
  {
    label: 'Cuneiform',
    ranges:[
      [ 0x12000, 0x123FF ],
    ]
  },
  {
    label: 'Cuneiform Numbers and Punctuation',
    ranges:[
      [ 0x12400, 0x1247F ],
    ]
  },
  {
    label: 'Cypriot Syllabary',
    ranges:[
      [ 0x10800, 0x1083F ],
    ]
  },
  {
    label: 'Early Dynastic Cuneiform',
    ranges:[
      [ 0x12480, 0x1254F ],
    ]
  },
  {
    label: 'Egyptian Hieroglyph Format Controls',
    ranges:[
      [ 0x13430, 0x1343F ],
    ]
  },
  {
    label: 'Egyptian Hieroglyphs',
    ranges:[
      [ 0x13000, 0x1342F ],
    ]
  },
  {
    label: 'Elbasan',
    ranges:[
      [ 0x10500, 0x1052F ],
    ]
  },
  {
    label: 'Elymaic',
    ranges:[
      [ 0x10FE0, 0x10FFF ],
    ]
  },
  {
    label: 'Glagolitic',
    ranges:[
      [ 0x2C00, 0x2C5F ],
    ]
  },
  {
    label: 'Glagolitic Supplement',
    ranges:[
      [ 0x1E000, 0x1E02F ],
    ]
  },
  {
    label: 'Gothic',
    ranges:[
      [ 0x10330, 0x1034F ],
    ]
  },
  {
    label: 'Hatran',
    ranges:[
      [ 0x108E0, 0x108FF ],
    ]
  },
  {
    label: 'Imperial Aramaic',
    ranges:[
      [ 0x10840, 0x1085F ],
    ]
  },
  {
    label: 'Indic Siyaq Numbers',
    ranges:[
      [ 0x1EC70, 0x1ECBF ],
    ]
  },
  {
    label: 'Inscriptional Pahlavi',
    ranges:[
      [ 0x10B60, 0x10B7F ],
    ]
  },
  {
    label: 'Inscriptional Parthian',
    ranges:[
      [ 0x10B40, 0x10B5F ],
    ]
  },
  {
    label: 'Kharoshthi',
    ranges:[
      [ 0x10A00, 0x10A5F ],
    ]
  },
  {
    label: 'Linear A',
    ranges:[
      [ 0x10600, 0x1077F ],
    ]
  },
  {
    label: 'Linear B Ideograms',
    ranges:[
      [ 0x10080, 0x100FF ],
    ]
  },
  {
    label: 'Linear B Syllabary',
    ranges:[
      [ 0x10000, 0x1007F ],
    ]
  },
  {
    label: 'Lycian',
    ranges:[
      [ 0x10280, 0x1029F ],
    ]
  },
  {
    label: 'Lydian',
    ranges:[
      [ 0x10920, 0x1093F ],
    ]
  },
  {
    label: 'Manichaean',
    ranges:[
      [ 0x10AC0, 0x10AFF ],
    ]
  },
  {
    label: 'Mayan Numerals',
    ranges:[
      [ 0x1D2E0, 0x1D2FF ],
    ]
  },
  {
    label: 'Meroitic Cursive',
    ranges:[
      [ 0x109A0, 0x109FF ],
    ]
  },
  {
    label: 'Meroitic Hieroglyphs',
    ranges:[
      [ 0x10980, 0x1099F ],
    ]
  },
  {
    label: 'Nabataean',
    ranges:[
      [ 0x10880, 0x108AF ],
    ]
  },
  {
    label: 'Nandinagari',
    ranges:[
      [ 0x119A0, 0x119FF ],
    ]
  },
  {
    label: 'Ogham',
    ranges:[
      [ 0x1680, 0x169F ],
    ]
  },
  {
    label: 'Old Hungarian',
    ranges:[
      [ 0x10C80, 0x10CFF ],
    ]
  },
  {
    label: 'Old Italic',
    ranges:[
      [ 0x10300, 0x1032F ],
    ]
  },
  {
    label: 'Old North Arabian',
    ranges:[
      [ 0x10A80, 0x10A9F ],
    ]
  },
  {
    label: 'Old Permic',
    ranges:[
      [ 0x10350, 0x1037F ],
    ]
  },
  {
    label: 'Old Persian',
    ranges:[
      [ 0x103A0, 0x103DF ],
    ]
  },
  {
    label: 'Old Sogdian',
    ranges:[
      [ 0x10F00, 0x10F2F ],
    ]
  },
  {
    label: 'Old South Arabian',
    ranges:[
      [ 0x10A60, 0x10A7F ],
    ]
  },
  {
    label: 'Old Turkic',
    ranges:[
      [ 0x10C00, 0x10C4F ],
    ]
  },
  {
    label: 'Palmyrene',
    ranges:[
      [ 0x10860, 0x1087F ],
    ]
  },
  {
    label: 'Phaistos Disc',
    ranges:[
      [ 0x101D0, 0x101FF ],
    ]
  },
  {
    label: 'Phoenician',
    ranges:[
      [ 0x10900, 0x1091F ],
    ]
  },
  {
    label: 'Psalter Pahlavi',
    ranges:[
      [ 0x10B80, 0x10BAF ],
    ]
  },
  {
    label: 'Runic',
    ranges:[
      [ 0x16A0, 0x16FF ],
    ]
  },
  {
    label: 'Sogdian',
    ranges:[
      [ 0x10F30, 0x10F6F ],
    ]
  },
  {
    label: 'Soyombo',
    ranges:[
      [ 0x11A50, 0x11AAF ],
    ]
  },
  {
    label: 'Ugaritic',
    ranges:[
      [ 0x10380, 0x1039F ],
    ]
  },
  {
    label: 'Yezidi',
    ranges:[
      [ 0x11900, 0x1195F ],
    ]
  },
  {
    label: 'Zanabazar Square',
    ranges:[
      [ 0x11A00, 0x11A4F ],
    ]
  },

  // Misc
  {
    label: 'Shavian',
    ranges: [
      [ 0x10450, 0x1047F ],
    ]
  },
  {
    label: 'Braille Patterns',
    ranges:[
      [ 0x2800, 0x28FF ],
    ]
  },
  {
    label: 'Music',
    ranges: [
      // Musical Symbols
      [ 0x1D100, 0x1D1FF ],
      // Byzantine Musical Symbols
      [ 0x1D000, 0x1D0FF ],
      // Ancient Greek Musical Notation
      [ 0x1D200, 0x1D24F ],
    ]
  },
  {
    label: 'Shorthand',
    ranges:[
      // Duployan shorthand
      [ 0x1BC00, 0x1BC9F ],
      // Shorthand Format Controls
      [ 0x1BCA0, 0x1BCAF ],
    ]
  },
  {
    label: 'Sutton SignWriting',
    ranges:[
      [ 0x1D800, 0x1DAAF ],
    ]
  },
  {
    label: 'Misc',
    ranges: [
      // Modifier Tone Letters
      [ 0xA700, 0xA71F ],
      // Small Form Variants
      [ 0xFE50, 0xFE6F ],
      // Alphabetic Presentation Forms
      [ 0xFB00, 0xFB4F ],
    ]
  }
]
