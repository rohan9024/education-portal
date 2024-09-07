import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Inter, Poppins, Raleway, Lato, Manrope } from "next/font/google";
const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Homepage() {
  return (
    <div className={`${manrope.className}  flex flex-col min-h-[100dvh]`}>
      <header className="px-4 lg:px-6 h-auto  flex items-center bg-white text-black">
        <Link
          href="#"
          className="flex items-center justify-center bg-white"
          prefetch={false}
        >
          <img src="/logo.png" className="h-20 w-44 object-contain" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Jobs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Internships
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Employers
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 text-black">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center items-center ">
              <div className="flex flex-col justify-center  space-y-10 ">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Your Next Opportunity
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-lg">
                    Explore a wide range of job and internship opportunities in
                    the Technical Education Department, Government of Rajasthan.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Find Jobs
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary text-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Find Internships
                  </Link>
                </div>
              </div>
              <div className="w-1/2 rounded-lg">

              <img
                src="/sideimage.png"
                width="550"
                height="550"
                alt="Hero"
                className="w-[700px] rounded-lg object-cover"
              />
              </div>

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Jobs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Available Opportunities
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through a wide range of job and internship
                  opportunities in the Technical Education Department,
                  Government of Rajasthan.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader className="flex flex-row items-center p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BriefcaseIcon className="h-6 w-6" />
                    <span>Software Engineer</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      <span>Jaipur, Rajasthan</span>
                    </div>
                    <p className="text-muted-foreground">
                      We are looking for a skilled Software Engineer to join our
                      team and help us build innovative solutions for the
                      Technical Education Department.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader className="flex flex-row items-center p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BriefcaseIcon className="h-6 w-6" />
                    <span>Graphic Designer</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Internship</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      <span>Udaipur, Rajasthan</span>
                    </div>
                    <p className="text-muted-foreground">
                      We are seeking a talented Graphic Designer to join our
                      team and help us create visually stunning designs for the
                      Technical Education Department.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader className="flex flex-row items-center p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BriefcaseIcon className="h-6 w-6" />
                    <span>Data Analyst</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      <span>Jodhpur, Rajasthan</span>
                    </div>
                    <p className="text-muted-foreground">
                      We are seeking a skilled Data Analyst to join our team and
                      help us derive valuable insights from data to support the
                      Technical Education Department.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-none shadow-none">
                <CardHeader className="flex flex-row items-center p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <BriefcaseIcon className="h-6 w-6" />
                    <span>Web Developer</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>Internship</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      <span>Kota, Rajasthan</span>
                    </div>
                    <p className="text-muted-foreground">
                      We are looking for a talented Web Developer to join our
                      team and help us build innovative web applications for the
                      Technical Education Department.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View More Opportunities
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Application Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How to Apply
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to apply for job and internship
                  opportunities in the Technical Education Department,
                  Government of Rajasthan.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <SearchIcon className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Search and Apply</h3>
                  <p className="text-muted-foreground">
                    Browse through the available job and internship
                    opportunities and apply for the ones that match your skills
                    and interests.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <UploadIcon className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Submit Your Application</h3>
                  <p className="text-muted-foreground">
                    Prepare your resume, cover letter, and any other required
                    documents, and submit your application through the platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <CheckIcon className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Track Your Application</h3>
                  <p className="text-muted-foreground">
                    Monitor the status of your application and receive updates
                    on the selection process through the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get Started with JobSeeker Connect
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up today and take the first step towards your dream career.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-2"
                prefetch={false}
              >
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 JobSeeker Connect. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
