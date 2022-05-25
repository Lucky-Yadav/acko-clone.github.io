function footer(){
    return `
    <div class = "footerBox">
    <div class = "leftPartfooter">
        <h4>ACKO General Insurance Limited</h4>
        <p>2nd floor, #36/5, Hustlehub One East,<br>
        Somasandrapalya, 27th Main road, Sector 2, HSR<br>
        Layout, Bengaluru, Karnataka - 560102</p>
        <br><br>
        <h4 style="margin-left:20px;">We're socially active!</h4>
        <div class = "social">
       <a href = "https://www.facebook.com/ackoindia/" target="_blank"><i class="fa fa-facebook-square" style="font-size: 25px;color: black;"></i></a>
       <a href = "https://www.instagram.com/ackoinsurance/" target="_blank"><i class="fa fa-instagram"style="font-size: 25px;color: black;"></i></a>
        <a href = "https://twitter.com/AckoIndia" target="_blank"><i class="fa fa-twitter"style="font-size: 25px;color: black;" ></i></a>
        <a href = "https://www.linkedin.com/company/acko/" target="_blank"><i class="fa fa-linkedin-square"style="font-size: 25px;color: black;"></i></a>
        <a href = "https://www.youtube.com/channel/UCn1gqDU9TqbR8u6_10S0RJA" target="_blank"><i class="fa fa-youtube-play"style="font-size: 25px;color: black;"></i></a>
        </div>
        <div class = "appStore">
        <a href = "https://ackogi01.onelink.me/j0xF/fce251b8" target="_blank"><img src = "data:image/png;base64,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"/></a>
        <a href = "https://apps.apple.com/in/app/id1535591580?mt=8" target="_blank"><img src = "data:image/png;base64,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" /></a>
    </div>
    </div>
    <div class="vl"></div>
    <div class = "rightPartfooter">
        <div class = "horizontalOne">
        <div class = "company">
            <h4>Company</h4>
            <a href = "https://www.acko.com/about-us/" target="_blank">About us</a><br>
            <a href = "https://www.acko.com/board-of-directors/" target="_blank">Board of directors</a><br>
            <a href = "https://acko.hirexp.com/" target="_blank">Careers</a><br>
            <a href = "https://www.acko.com/media-kit/" target="_blank">Media kit</a><br>
            <a href = "https://www.acko.com/articles/" target="_blank">Articles</a><br>
            <a href = "https://ackology.acko.com/" target="_blank">Ackology - The tech blog</a><br>
            <a href = "https://www.acko.com/partnerships/" target="_blank">Partnerships</a><br>
            <a href = "https://www.acko.com/sitemap/" target="_blank">Sitemap</a>
        </div>
        <div class = "support">
            <h4>Support</h4>
            <a href = "https://www.acko.com/contact-us/" target="_blank">Contact us</a><br>
            <a href = "https://www.acko.com/cancellation-and-refund-policy/" target="_blank">Cancellations & refunds</a><br>
            <a href = "https://acko.com/customer-service/" target="_blank">Customer Service</a><br>
            <a href = "https://www.acko.com/download/" target="_blank">Downloads</a><br>
            <a href = "https://www.acko.com/unclaimed-amount.pdf" target="_blank">Unclaimed amount</a><br>
            <a href = "https://www.irdai.gov.in/" target="_blank">IRDAI Website</a><br>
            <a href = "https://www.acko.com/commercial-insurance/" target="_blank">Other products</a>
        </div>
        <div class = "legal">
            <h4>Legal</h4>
            <a href = "https://www.acko.com/wp-content/uploads/2018/02/Whistleblower-policy.pdf" target="_blank">Whistleblower policy</a><br>
            <a href = "https://www.acko.com/public-disclosure/" target="_blank">Public disclosure</a><br>
            <a href = "https://www.acko.com/financials-disclosures/" target="_blank">Financials & disclosures</a><br>
            <a href = "https://www.acko.com/privacy-policy/" target="_blank">Privacy policy</a><br>
            <a href = "https://www.acko.com/terms-and-conditions/" target="_blank">Terms & conditions</a><br>
            <a href = "https://www.acko.com/offers-terms-and-conditions/" target="_blank">Offer terms & conditions</a><br>
            <a href = "https://www.acko.com/wp-content/uploads/2018/07/policy-on-stewardship-code.pdf" target="_blank">Stewardship code</a><br>
            <a href = "https://www.acko.com/disclaimer/" target="_blank">Disclaimer</a><br>
            <a href = "https://www.acko.com/wp-content/uploads/2020/06/anti-fraud-policy.pdf" target="_blank">Anti fraud policy</a><br>
            <a href = "https://www.acko.com/wp-content/uploads/2020/10/acko-health-underwriting-philosophy.pdf" target="_blank">Health underwriting philosophy</a><br>
        </div>
        </div>
        <div class = "hori"><hr></div>
        <div class = "horizontalTwo">
            <div class = "carInsure">
                <a href = "https://www.acko.com/guides/car-insurance/" target="_blank"><h4>Car Insurance Guides</h4></a>
                <a href = "https://www.acko.com/car-insurance/premium-calculator/" target="_blank">Car Insurance Calculator</a><br>
                <a href = "https://www.acko.com/car-insurance/compare/" target="_blank">Car Insurance Comparison</a><br>
                <a href = "https://www.acko.com/car-insurance/claims/" target="_blank">Car Insurance Claim Process</a><br>
                <a href = "https://www.acko.com/media-kit/" target="_blank">IDV in Car Insurance</a><br>
                <a href = "https://www.acko.com/motor-insurance/" target="_blank">Vehicle/Motor Insurance</a><br>
                <a href = "https://www.acko.com/car-insurance/zero-depreciation/" target="_blank">Zero depriciation car insurance</a><br>
                <a href = "https://www.acko.com/car-insurance/for-new-cars/" target="_blank">Brand new car insurance</a><br>
                <a href = "https://www.acko.com/articles/car-insurance/" target="_blank">Car insurance articles</a>
            </div>
            <div class = "bikeInsure">
               <a href = "https://www.acko.com/guides/two-wheeler-insurance/" target="_blank"><h4>Bike Insurance Guides</h4></a>
                <a href = "https://www.acko.com/two-wheeler-insurance/premium-calculator/" target="_blank">Bike Insurance Premium Calculator</a><br>
                <a href = "https://www.acko.com/two-wheeler-insurance/compare/" target="_blank">Compare Two Wheeler Insurance Online</a><br>
                <a href = "https://www.acko.com/two-wheeler-insurance/claims/" target="_blank">Bike/Two-Wheeler Insurance Claim Process</a><br>
                <a href = "https://www.acko.com/two-wheeler-insurance/idv-in-bike-insurance/" target="_blank">IDV in Bike Insurance</a><br>
                <a href = "https://www.acko.com/two-wheeler-insurance/standalone-own-damage-insurance/" target="_blank">Own Damage Insurance for Bike</a><br>
                <a href = "https://www.acko.com/two-wheeler-insurance/for-new-bikes/" target="_blank">New Bike Insurance</a><br>
                <a href = "https://www.acko.com/articles/two-wheeler-insurance/" target="_blank">Bike Insurance Articles</a>
            </div>
            <div class = "healthInsure">
                <a href = "https://www.acko.com/guides/health-insurance/" target="_blank"><h4>Health Insurance Guides</h4></a>
                <a href = "https://www.acko.com/health-insurance/covid-19-insurance/" target="_blank">COVID-19 Health Insurance</a><br>
                <a href = "https://www.acko.com/health-insurance/corona-kavach-policy/" target="_blank">Corona Kavach Policy</a><br>
                <a href = "https://www.acko.com/health-insurance/premium-calculator/" target="_blank">Health Insurance Premium Calculator</a><br>
                <a href = "https://www.acko.com/health-insurance/compare/" target="_blank">Compare Health Insurance</a><br>
                <a href = "https://www.acko.com/articles/health-insurance/" target="_blank">Health insurance articles</a><br>
                <a href = "https://www.acko.com/health-insurance/claim/" target="_blank">Health Insurance Claim</a><br>
                <a href = "https://www.acko.com/health-insurance/cashless/" target="_blank">Cashless Health Insurance</a><br>
                <a href = "https://www.acko.com/health-insurance/renewal/" target="_blank">Renewing Mediclaim Policy Online</a><br>
                <a href = "https://www.acko.com/individual-health-insurance/" target="_blank">Individual Mediclaim Policy</a>
            </div>
        </div>
    </div>
</div>
<div class = "lowermostFooter">
    <span>CIN: U66000KA2016PLC138288</span>
    <span>IRDAI Registration No: 157</span>
    <span>Category: Non-Life Insurance</span>
    <p>The use of images and brands are only for the purpose of indication and illustration. ACKO claims no rights on the IP rights of any third parties. The ratings are derived from reviews and feedback received from Google and Facebook users on their<br>
       respective platforms. | *Savings of upto Rs. 50,000 have been calculated on the IDV of Rs. 18,00,000 and 0% NCB. Amount saved is in comparison to tariff rates. Product name: Private Car Policy - Bundled | UIN: IRDAN157RP0014V01201819 |<br>
       Trade logo displayed above belongs to ACKO Technology & Services Pvt Ltd and used by ACKO General insurance Limited under License. For more details on risk factors, terms, conditions and exclusions, please read the policy wordings carefully before<br>
       concluding a sale.</p>
</div>
</div>
    `
}

export default footer;