import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react"

export type ProfileCardProps = {
  name: string
  email?: string
  phone?: string
  whatsapp?: string
  country?: string
  className?: string
  message?: string
}

function normalizePhoneForTel(input: string) {
  const trimmed = input.trim()
  const hasPlus = trimmed.startsWith("+")
  const digits = trimmed.replace(/[^\d]/g, "")
  return hasPlus ? `+${digits}` : digits
}

function normalizePhoneForWa(input: string) {
  return input.replace(/[^\d]/g, "")
}

function Row({
  icon,
  text,
  href,
  external,
}: {
  icon: React.ReactNode
  text: string
  href?: string
  external?: boolean
}) {
  const content = (
    <>
      <div className="grid h-9 w-9 place-items-center rounded-md border bg-background text-muted-foreground">
        {icon}
      </div>
      <span className="min-w-0 truncate text-sm text-muted-foreground">
        {text}
      </span>
    </>
  )

  if (!href) {
    return <div className="flex items-center gap-3 p-2">{content}</div>
  }

  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-muted/60"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {content}
    </a>
  )
}

export function ProfileCard({
  name,
  email,
  phone,
  whatsapp,
  country,
  className,
  message,
}: ProfileCardProps) {
  const emailVal = email?.trim()
  const phoneVal = phone?.trim()
  const waVal = whatsapp?.trim()
  const countryVal = country?.trim()

  return (
    <Card className={["w-full max-w-sm", className].filter(Boolean).join(" ")}>
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="mt-2 text-xl font-semibold">{name}</h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {message}
          </p>
        </div>

        <div className="mt-6 space-y-1">
          {/* Email */}
          {emailVal ? (
            <Row
              icon={<Mail className="h-4 w-4" />}
              text={emailVal}
              href={`mailto:${emailVal}`}
            />
          ) : null}

          {/* Phone */}
          {phoneVal ? (
            <Row
              icon={<Phone className="h-4 w-4" />}
              text={phoneVal}
              href={`tel:${normalizePhoneForTel(phoneVal)}`}
            />
          ) : null}

          {/* WhatsApp */}
          {waVal ? (
            <Row
              icon={<MessageCircle className="h-4 w-4" />}
              text="WhatsApp"
              href={`https://wa.me/${normalizePhoneForWa(waVal)}?text=Hi,%20I%20found%20your%20luggage`}
              external
            />
          ) : null}

          {/* Country (not clickable) */}
          {countryVal ? (
            <Row icon={<MapPin className="h-4 w-4" />} text={countryVal} />
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}