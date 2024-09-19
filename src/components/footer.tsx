import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Footer() {
    // TODO: integrate api category on shop highlights

    return (
        <footer className="bg-primary text-white px-6 py-2">
            {/* shop highlights */}
            <Accordion type="single" collapsible>
                <AccordionItem className="border-accent" value="item-1">
                    <AccordionTrigger className="text-lg">Shop Highlights</AccordionTrigger>
                    <AccordionContent className="text-accent text-base space-y-2">
                        <p>Men</p>
                        <p>Women</p>
                        <p>Jewelries</p>
                        <p>Electronics</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </footer>
    )
}