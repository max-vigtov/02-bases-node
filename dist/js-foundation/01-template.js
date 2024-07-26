"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
<div>
    <h1>Hi, {{name}}}</h1>
    <p>Thank you for subscribing to our newsletter!</p>
    <p>Order id:,{{orderId}}}</p>
    
</div>`;
module.exports = {
    emailTemplate: exports.emailTemplate
};
