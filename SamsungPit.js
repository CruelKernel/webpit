// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream', './SamsungSignature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'), require('./SamsungSignature'));
  } else {
    root.SamsungPit = factory(root.KaitaiStream, root.SamsungSignature);
  }
}(this, function (KaitaiStream, SamsungSignature) {
var SamsungPit = (function() {
  SamsungPit.BinaryType = Object.freeze({
    AP: 0,
    CP: 1,

    0: "AP",
    1: "CP",
  });

  SamsungPit.DeviceType = Object.freeze({
    ONENAND: 0,
    FILEFAT: 1,
    MMC: 2,
    ALL: 3,

    0: "ONENAND",
    1: "FILEFAT",
    2: "MMC",
    3: "ALL",
  });

  function SamsungPit(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  SamsungPit.prototype._read = function() {
    this.magic = this._io.ensureFixedContents([118, 152, 52, 18]);
    this.entryCount = this._io.readU4le();
    this.port = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
    this.format = KaitaiStream.bytesToStr(this._io.readBytes(4), "ASCII");
    this.chip = KaitaiStream.bytesToStr(this._io.readBytes(8), "ASCII");
    this.unknown4 = this._io.readU4le();
    this.partitions = new Array(this.entryCount);
    for (var i = 0; i < this.entryCount; i++) {
      this.partitions[i] = new Partition(this._io, this, this._root);
    }
    if (!(this._io.isEof())) {
      this.signature = new SamsungSignature(this._io, this, null);
    }
  }

  var Attributes = SamsungPit.Attributes = (function() {
    function Attributes(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Attributes.prototype._read = function() {
      this.value = this._io.readU4le();
    }
    Object.defineProperty(Attributes.prototype, 'read', {
      get: function() {
        if (this._m_read !== undefined)
          return this._m_read;
        this._m_read = true;
        return this._m_read;
      }
    });
    Object.defineProperty(Attributes.prototype, 'write', {
      get: function() {
        if (this._m_write !== undefined)
          return this._m_write;
        this._m_write = (this.value & 1) == 1;
        return this._m_write;
      }
    });
    Object.defineProperty(Attributes.prototype, 'stl', {
      get: function() {
        if (this._m_stl !== undefined)
          return this._m_stl;
        this._m_stl = (this.value & (1 << 1)) == 2;
        return this._m_stl;
      }
    });

    return Attributes;
  })();

  var UpdateAttributes = SamsungPit.UpdateAttributes = (function() {
    function UpdateAttributes(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    UpdateAttributes.prototype._read = function() {
      this.value = this._io.readU4le();
    }
    Object.defineProperty(UpdateAttributes.prototype, 'fota', {
      get: function() {
        if (this._m_fota !== undefined)
          return this._m_fota;
        this._m_fota = (this.value & 1) == 1;
        return this._m_fota;
      }
    });
    Object.defineProperty(UpdateAttributes.prototype, 'secure', {
      get: function() {
        if (this._m_secure !== undefined)
          return this._m_secure;
        this._m_secure = (this.value & (1 << 1)) == 2;
        return this._m_secure;
      }
    });

    return UpdateAttributes;
  })();

  var Partition = SamsungPit.Partition = (function() {
    function Partition(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Partition.prototype._read = function() {
      this.binaryType = this._io.readU4le();
      this.deviceType = this._io.readU4le();
      this.identifier = this._io.readU4le();
      this.attributes = new Attributes(this._io, this, this._root);
      this.updateAttributes = new UpdateAttributes(this._io, this, this._root);
      this.blockSizeOrOffset = this._io.readU4le();
      this.blockCount = this._io.readU4le();
      this.fileOffset = this._io.readU4le();
      this.fileSize = this._io.readU4le();
      this.partitionName = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(32), 0, false), "ASCII");
      this.flashFilename = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(32), 0, false), "ASCII");
      this.fotaFilename = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(32), 0, false), "ASCII");
    }

    /**
     * Obsolete
     */

    /**
     * Obsolete
     */

    return Partition;
  })();

  return SamsungPit;
})();
return SamsungPit;
}));
