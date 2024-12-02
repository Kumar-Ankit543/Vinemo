import Link from "next/link";
import Image from "next/image";
import { Button } from "@repo/ui/";
import { Input } from "@repo/ui/";
import {
  Users,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function LandingPage() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  } else {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 ml-16">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Send & receive money instantly
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                      Split bills, pay friends back, and manage your money with
                      ease. Fast, secure, and free to use.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Get Started
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <Image
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
                  height="550"
                  src="/home-hero.png"
                  width="550"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-slate-100">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Features you'll love
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Everything you need to manage your money with friends and
                    family.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <Users className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-center">
                    Split Bills Easily
                  </h3>
                  <p className="text-sm text-center text-gray-500 ">
                    Divide expenses with roommates, friends, or family. Everyone
                    pays their fair share.
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Smartphone className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-center">
                    Instant Transfers
                  </h3>
                  <p className="text-sm text-center text-gray-500">
                    Send and receive money instantly. No waiting, no hassle.
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Shield className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold text-center">
                    Bank-Level Security
                  </h3>
                  <p className="text-sm text-center text-gray-500 ">
                    Your money and data are protected with industry-leading
                    security measures.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Group expenses made simple
                  </h2>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn more
                  </Link>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      <div className="text-lg font-medium leading-none">
                        Create group expenses
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      <div className="text-lg font-medium leading-none">
                        Split bills automatically
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                      <div className="text-lg font-medium leading-none">
                        Track who paid what
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
                  Ready to get started?
                </h2>
                <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of people who use PayShare to split bills and
                  share expenses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Download App
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Join our community
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Enter your email to get notified about new features and
                    updates.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button type="submit">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    By subscribing, you agree to our{" "}
                    <Link className="underline underline-offset-2" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">
            © 2024 PayShare. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    );
  }
}
