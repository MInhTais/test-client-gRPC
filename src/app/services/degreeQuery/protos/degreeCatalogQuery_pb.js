// source: degreeCatalogQuery.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf')
var goog = jspb
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    function () {
        return this
    }.call(null) ||
    Function('return this')()

var result_pb = require('../../result/protos/result_pb')
goog.object.extend(proto, result_pb)
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
goog.object.extend(proto, google_protobuf_wrappers_pb)
goog.exportSymbol('proto.DegreeCatalog.GetAllDegreeCatalogsRequest', null, global)
goog.exportSymbol('proto.DegreeCatalog.GetDegreeCatalogRequest', null, global)
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DegreeCatalog.GetDegreeCatalogRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.DegreeCatalog.GetDegreeCatalogRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.DegreeCatalog.GetDegreeCatalogRequest.displayName = 'proto.DegreeCatalog.GetDegreeCatalogRequest'
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DegreeCatalog.GetAllDegreeCatalogsRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.DegreeCatalog.GetAllDegreeCatalogsRequest, jspb.Message)
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.DegreeCatalog.GetAllDegreeCatalogsRequest.displayName = 'proto.DegreeCatalog.GetAllDegreeCatalogsRequest'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.DegreeCatalog.GetDegreeCatalogRequest.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.DegreeCatalog.GetDegreeCatalogRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.DegreeCatalog.GetDegreeCatalogRequest.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
            }

        if (includeInstance) {
            obj.$jspbMessageInstance = msg
        }
        return obj
    }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DegreeCatalog.GetDegreeCatalogRequest}
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes)
    var msg = new proto.DegreeCatalog.GetDegreeCatalogRequest()
    return proto.DegreeCatalog.GetDegreeCatalogRequest.deserializeBinaryFromReader(msg, reader)
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DegreeCatalog.GetDegreeCatalogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DegreeCatalog.GetDegreeCatalogRequest}
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break
        }
        var field = reader.getFieldNumber()
        switch (field) {
            case 1:
                var value = new google_protobuf_wrappers_pb.Int32Value()
                reader.readMessage(value, google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader)
                msg.setId(value)
                break
            default:
                reader.skipField()
                break
        }
    }
    return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter()
    proto.DegreeCatalog.GetDegreeCatalogRequest.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DegreeCatalog.GetDegreeCatalogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getId()
    if (f != null) {
        writer.writeMessage(1, f, google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter)
    }
}

/**
 * optional google.protobuf.Int32Value Id = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.getId = function () {
    return /** @type{?proto.google.protobuf.Int32Value} */ (
        jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1)
    )
}

/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.DegreeCatalog.GetDegreeCatalogRequest} returns this
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.setId = function (value) {
    return jspb.Message.setWrapperField(this, 1, value)
}

/**
 * Clears the message field making it undefined.
 * @return {!proto.DegreeCatalog.GetDegreeCatalogRequest} returns this
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.clearId = function () {
    return this.setId(undefined)
}

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DegreeCatalog.GetDegreeCatalogRequest.prototype.hasId = function () {
    return jspb.Message.getField(this, 1) != null
}

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.DegreeCatalog.GetAllDegreeCatalogsRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.DegreeCatalog.GetAllDegreeCatalogsRequest.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.DegreeCatalog.GetAllDegreeCatalogsRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.DegreeCatalog.GetAllDegreeCatalogsRequest.toObject = function (includeInstance, msg) {
        var f,
            obj = {}

        if (includeInstance) {
            obj.$jspbMessageInstance = msg
        }
        return obj
    }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DegreeCatalog.GetAllDegreeCatalogsRequest}
 */
proto.DegreeCatalog.GetAllDegreeCatalogsRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes)
    var msg = new proto.DegreeCatalog.GetAllDegreeCatalogsRequest()
    return proto.DegreeCatalog.GetAllDegreeCatalogsRequest.deserializeBinaryFromReader(msg, reader)
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DegreeCatalog.GetAllDegreeCatalogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DegreeCatalog.GetAllDegreeCatalogsRequest}
 */
proto.DegreeCatalog.GetAllDegreeCatalogsRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break
        }
        var field = reader.getFieldNumber()
        switch (field) {
            default:
                reader.skipField()
                break
        }
    }
    return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DegreeCatalog.GetAllDegreeCatalogsRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter()
    proto.DegreeCatalog.GetAllDegreeCatalogsRequest.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DegreeCatalog.GetAllDegreeCatalogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DegreeCatalog.GetAllDegreeCatalogsRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
}

goog.object.extend(exports, proto.DegreeCatalog)
