import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Step,
  type StepItem,
  Stepper,
  // type StepperProps,
  useStepper,
} from "@/components/stepper";
import FormatElement from "./elements/FormatElement";

const steps = [
  {
    label: "Format",
    component: <FormatElement />,
  },
  {
    label: "Mapping",
    component: <div>Mapping</div>,
  },
  { label: "Preview", component: <div>Preview</div> },
  { label: "Export", component: <div>Export</div> },
] satisfies (StepItem & { component: React.ReactNode })[];

function ExportModal(props: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Export Invoice</DialogTitle>
          <DialogDescription>
            Export invoice in the accounting format of your choice.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <Stepper variant={"line"} initialStep={0} steps={steps}>
            {steps.map((stepProps, index) => {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <div className="min-h-40 flex items-center justify-center my-2 rounded-md">
                    {stepProps.component}
                  </div>
                </Step>
              );
            })}
            <Footer />
          </Stepper>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExportModal;

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="w-full flex justify-end gap-2 mt-8">
        {hasCompletedAllSteps ? (
          <Button onClick={resetSteps}>Reset</Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              variant="secondary"
            >
              Prev
            </Button>
            <Button onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
