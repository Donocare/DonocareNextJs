'use client'
import BottomFooter from "@/components/re/bottomFooter"

const TermsConditions: () => void = () => {


    return (
        <>
            <div className="text-gray-700">
                <div className="flex w-full h-fit p-4 bg-gradient-to-b 
                from-o1 to-o2 items-center lg:py-8">
                    <label className="flex text-2xl lg:text-4xl lg:pl-20 text-white font-bold pl-3 py-4 ">
                        Terms & Conditions </label>
                </div>
                <div className=" flex m-2 bg-bg2 h-fit p-4 flex-col lg:m-28 lg:p-[8vh]  ">
                    <h2 className="pt-3 text-xl font-bold text-pH lg:text-4xl">
                        Terms & Conditions</h2>
                    <div className="fle flex-col space-y-6 pt-6">
                        <p className=" text-sm lg:text-lg lg:pt-8">
                            At Donocare we provide a highly productive environment.
                            A place where the growth is conducive and is simply the result of the freedom
                            provided with ideas and application. The high level of transparency and employee
                            centric policies complemented by an Industry standard remuneration package makes us one of
                            the good employers and a right place to grow the career.

                        </p>
                        <p className=" text-sm lg:text-lg lg:pt-8 ">
                            We promote team effort and breed our values of working together as
                            a team to make success a habit rather than an occasional thing.
                        </p>
                        <p className=" text-sm lg:text-lg lg:pt-8">
                            Our headhunting for good talent is always on. If you feel that you have the force within
                            you to face the challenges of the new world and are able to solve highly
                            complex business problems as a part of high productive team mail us at

                        </p>
                        <p className=" text-sm lg:text-lg lg:pt-8">
                            Please remember to have the
                            invoice number and customer reference number in your hand before you make the payments.

                        </p>
                    </div>
                    <div className="flex flex-col pt-6 ">
                        <ul className="flex flex-col pt-6 pl-8 pr-4 list-disc space-y-4 text-sm lg:text-lg">
                            <li>Our online payment transactions are managed by HSBC (i.e Service Provider).</li>
                            <li>The card details you have entered will be stored with our service provider.</li>
                            <li>We accept VISA and MASTER credit / debit cards For every successful payment an confirmation email
                                will be sent to your email Id which was be provided to our Business Development team for all
                                interactions.</li>
                            <li>It will take around 48 hrs to display the payment details in your card statement.</li>
                            <li>Your payment will take a minimum of 48 hours to reach the account to which you are making
                                a payment. (This includes time to verify your credit/debit card details with your credit/debit
                                card supplier and for payment to be notified to the Council.) If your payment is overdue and
                                recovery action is about to be taken, you should pay cheque or account transfer to company
                                account
                            </li>
                            <li>We cannot accept liability for a payment not reaching the intended account due to a customer
                                quoting an incorrect account number.</li>
                            <li>We cannot accept liability if payment is refused or declined by the credit/debit card supplier
                                (due to the customer quoting incorrect card details or other reasons). If the credit/debit
                                card supplier declines payment, the Council is under no obligation to bring this fact to the
                                customer's attention. Customers should check with their bank/credit/debit card supplier that payment has been deducted from their account.
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col pt-6 space-y-6">
                        <div>
                            <h3 className="font-bold text-md text-sH lg:text-xl">HOSTING PACKAGE : </h3>
                            <p className="pt-2 text-sm lg:text-lg">
                                Donocare works with the third party hosting providers in order to provide hosting packages
                                to the clients. Security, Data recovery, Emailing policy, activation and other policies related
                                to hosting entirely depends upon the third party service provider.
                                Donocare is not responsible for any issues with respect to hosting.

                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-sH lg:text-xl">CURRENCIES : </h3>
                            <p className="pt-2 text-sm lg:text-lg">
                            We accept the payments in GBP (£) for the customers from United kingdom.
                             Customers from other parts of the world can pay in either GBP (£) or in USD ($).
                              Your invoice will be clearly mentioned about the type of
                             currency we charging to you with appropriate symbol.

                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-sH lg:text-xl ">PAYMENT QUERIES : </h3>
                            <p className="pt-2 text-sm lg:text-lg">
                            For all payment queries, please send your email with your invoice number,
                             customer reference number, and amount to  , and accounts department will 
                             solve your issues as early as possible.

                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-md text-sH lg:text-xl ">REFUND POLICY : </h3>
                            <p className="pt-2 text-sm lg:text-lg">
                            A payment can only be refunded, if the client has paid the excess amount, and in order to 
                            refund a payment it will take around 30 working days from the date of request.

                            </p>
                        </div>
                        <div>

                            <h3 className="font-bold text-md text-sH lg:text-xl">CANCELLATION POLICY : </h3>
                            <p className="pt-2 text-sm lg:text-lg">
                            Only a payment made to wrong invoice can be cancelled until and unless
                             the invoice does not relate to the client directly or indirectly and there 
                             is no due to the clients invoice. In order to cancel an invoice it will take 
                             around 30 days from the date of request. If the clients invoice is still pending
            it will always be adjusted and a confirmation mail will be sent to the client.
                            </p>
                        </div>
                        
                        
                    </div>

                </div>

            </div>
            <div className="mt-4">
                <BottomFooter/>

            </div>

        </>
    )
}
export default TermsConditions