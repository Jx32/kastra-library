export namespace KastraUtil {
    export function generateFallbackAvatarUrl(name: string): string {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=64&bold=false`;
    }
}