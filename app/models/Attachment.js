var mongoose = require('mongoose');

const gridfs = require('mongoose-gridfs')({
      collection: 'attachments',
      model: 'Attachment'
    });
const AttachmentSchema = gridfs.schema;

module.export = mongoose.model('Attachment', AttachmentSchema);