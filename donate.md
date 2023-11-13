---
title: Donate
layout: interior-page
id: donate
---

<script src="/js/confetti.js" type="text/javascript"></script>
<script>fetti = toggleConfetti;
setTimeout(fetti, 300);
setTimeout(fetti, 800);</script>

## Become an OpenRocket Sponsor! <i class="fa-solid fa-heart"></i>
To fund our ongoing operations, the OpenRocket team is now accepting donations through the Open Collective funding platform.<br/>
**Please see the [FAQ below](donate.html#frequently-asked-questions) for a full explanation.**
​
<button id='button-donate' onclick="location.href='https://opencollective.com/openrocket#category-CONTRIBUTE'" type="button" class="btn btn-green" style="margin:1em auto; display:block; font-size: 18px; text-transform: none;">
          Donate on Open Collective <i class="fa-solid fa-circle-dollar-to-slot" style="margin-left: 1em"></i></button>

Contributions of any size are greatly appreciated.

## Frequently Asked Questions
<div>
    <button type="button" class="collapsible" style="margin-top: 15px">Why is OpenRocket raising money?</button>
    <div class="collapsible-content">
        OpenRocket has always been free and open source software, and will continue to be.<br/><br/>
        Starting with the 2022 release, we will be distributing OR primarily as a packaged application for Windows, Mac, and Linux. To do this properly, both to protect the security of the user and to avoid a whole bunch of annoying warnings, the app packages for Windows and Mac must be cryptographically signed according to the requirements of each platform. This in turn costs money: for the Mac, it requires a $100/year Apple developer account. For Windows, it will likely cost quite a bit more (we're still working out the details). These will be recurring expenses indefinitely into the future.<br/><br/>
        There are potentially other small expenses we might incur, such as Rocksim licenses so we can test import and export.
    ​</div>
​</div>

<div>
    <button type="button" class="collapsible">What are Open Collective and Open Source Collective?</button>
    <div class="collapsible-content">
        <a href='https://opencollective.com/openrocket' target="_blank">OpenRocket</a> has joined <a href='https://opencollective.com' target="_blank">Open Collective</a> (OC), which provides organizational support for projects like ours that need to raise funds.<br/><br/>
        <a href='https://www.oscollective.org' target="_blank">Open Source Collective</a> (OSC) is the *fiscal host* that will be handling the money for us. OSC operates like a bank that will hold all of our funds, and expenses will be paid directly from that account.
        <br/><br/>
        One appealing feature of these organizations is that our finances will always be completely transparent. The balance of funds in our account and the details of each expenditure are always available for anyone to see.
        <br/><br/>
        Please note that OSC charges a 10% transaction fee, so the project will receive 90% of the contributions made (possibly minus payment process fees, see below).
    ​</div>
​</div>

<div>
    <button type="button" class="collapsible">Why not just accept payments directly, to save the fees?</button>
    <div class="collapsible-content">
        There are two reasons why we have chosen this approach:
        <ol style="margin-bottom: 0;">
            <li>
                The OpenRocket team is a rather loose group of volunteers, with members who come and go over the years. There is no individual who is in a good position to act as a treasurer of sorts for the group. And we have no collective legal entity with which to establish financial accounts. OC + OSC provide all the infrastructure we need.
            </li>
            <li>
                Using OC + OSC guarantees that all finances are transparent. You don't need to wonder about what happens to the money that you contribute, it's all there out in the open.
            </li>
        </ol></div>
​</div>

<div>
    <button type="button" class="collapsible">How much money does the project need?</button>
    <div class="collapsible-content">
        Initially we need enough to pay for one year of developer accounts and/or certificates so we can sign the app: this totals somewhere around $500. To keep things running smoothly, we would ideally like to maintain a balance in our account to cover the next year's expenses as well.
        <br/><br/>
        Because these numbers are relatively small, we likewise encourage those who choose to contribute to keep their donations modest. We have no need or desire to accumulate a large excess of funds in our account which we cannot spend.
    ​</div>
​</div>

<div>
    <button type="button" class="collapsible">Do I have to donate? Can I still keep using OpenRocket for free?</button>
    <div class="collapsible-content">
        There is absolutely no obligation to donate; you are welcome to continue using OpenRocket for free as long as you like. If you have the means to make a contribution of any size then of course we will be grateful.
    ​</div>
​</div>

<div>
    <button type="button" class="collapsible">How do I donate?</button>
    <div class="collapsible-content">
        A donate button is available on the <a href='donate.html#button-donate'>top of this page</a>, or just follow <a href='https://opencollective.com/openrocket#category-CONTRIBUTE' target="_blank">this link</a>.
        <br/><br/>
        There are three ways to contribute, please be aware of the payment transaction fees:
        <ul>
            <li>Paypal: $0.49 + 3.4% fee</li>
            <li>Credit card (via Stripe): $0.30 + 2.9% fee</li>
            <li>Direct bank transfers: no additional fees, but may take a few days to clear</li>
        </ul>
        Because of the fees, $5 is set as the minimum donation, and contributions of that size are gratefully accepted. Larger contributions will be slightly more efficient in terms of diluting the fixed payment transaction fees.
    ​</div>
​</div>

**Thanks again to everyone who uses and supports OpenRocket!**

<script type="text/javascript" src="/js/collapsible.js" defer></script>
<script>
  window.onload = function() {
        attachCollapsibleListeners();
    }
</script>